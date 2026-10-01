import { test, expect } from '@playwright/test'

test('homepage preserves the engineering content and public navigation', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/AhsaTech/)
  await expect(page.locator('h1')).toContainText('Geleceğin Yazılım Mimarileri')
  await expect(page.locator('.telemetry-section')).toBeVisible()
  await expect(page.locator('.capability-row')).toHaveCount(4)
  await expect(page.locator('header a[href^="/admin"], footer a[href^="/admin"]')).toHaveCount(0)
})

test('mobile navigation locks scroll, contains focus, and closes with Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const trigger = page.getByRole('button', { name: 'Menüyü aç', exact: true })
  await trigger.click()
  await expect(page.getByRole('dialog')).toBeVisible()
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden')
  for (let index = 0; index < 10; index++) await page.keyboard.press('Tab')
  expect(await page.evaluate(() => Boolean(document.activeElement?.closest('dialog')))).toBe(true)
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).not.toBeVisible()
  await expect(trigger).toBeFocused()
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden')
})

test('project filters preserve category selection', async ({ page }) => {
  await page.goto('/projelerimiz')
  await page.locator('#filter-btn-iot').click()
  await expect(page.locator('#filter-btn-iot')).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('.projects-bento-grid article')).toHaveCount(1)
  await page.locator('#filter-btn-all').click()
  expect(await page.locator('.projects-bento-grid article').count()).toBeGreaterThan(1)
})

test('contact and quote remain separate routes', async ({ page }) => {
  await page.goto('/iletisim')
  await expect(page.locator('#office-locations-section')).toBeVisible()
  await expect(page.locator('#smart-rfq-portal')).toHaveCount(0)
  await page.goto('/teklif-al')
  await expect(page.locator('#smart-rfq-portal')).toBeVisible()
})

test('RFQ supports keyboard selection, validation and success feedback', async ({ page }) => {
  await page.goto('/teklif-al')
  await page.locator('#domain-hardware').focus()
  await page.keyboard.press('ArrowRight')
  await expect(page.locator('#domain-iot')).toHaveAttribute('aria-checked', 'true')
  await page.locator('#rfq-next-btn').click()
  await page.locator('#rfq-next-btn').click()
  await page.locator('#rfq-next-btn').click()
  await expect(page.locator('#smart-rfq-portal [role="alert"]')).toContainText('yetkili')
  await page.getByLabel('Yetkili Ad Soyad *', { exact: true }).fill('AhsaTech visual test')
  await page.locator('#rfq-email').fill('qa@example.com')
  await page.locator('#rfq-next-btn').click()
  await page.locator('#rfq-requirements').fill('Responsive form regression check')
  await page.locator('#rfq-next-btn').click()
  // Intercept only the final write: this test is safe against a local content database.
  await page.route('**/api/rfq-submit', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true, trackingCode: 'QA-PREVIEW' }),
    }),
  )
  await page.locator('#rfq-submit-btn').click()
  await expect(page.locator('#rfq-success-screen')).toBeVisible()
  await expect(page.locator('#rfq-tracking-code')).toHaveText('QA-PREVIEW')
})
