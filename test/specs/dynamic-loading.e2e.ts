describe("Dynamic loading page tests", () => {
    it("should load the dynamic content", async () => {
        // Open the dynamic loading page
        await browser.url('/dynamic_loading/1');

        // Click the start button to load the content
        const startButton = await $('button=Start');
        await startButton.click();

        // Wait for the loading to complete and the text to appear
        const loadedText = await $('#finish h4');
        await loadedText.waitForDisplayed({ timeout: 10000 });

        // Verify that the text is displayed correctly
        expect(await loadedText.getText()).toBe('Hello World!');
    });
})