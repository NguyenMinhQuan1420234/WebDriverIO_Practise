import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";

describe("Login regression", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining("You logged into a secure area!")
    );
    await expect(SecurePage.flashAlert).toMatchElementSnapshot("flashAlert");
  });

  it("should not login with invalid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("tomsmith", "");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining("Your password is invalid!")
    );
  });

  it("should not login with empty credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("", "");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining("Your username is invalid!")
    );
  });

  it("should not login with invalid username", async () => {
    await LoginPage.open();

    await LoginPage.login("invalidUser", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining("Your username is invalid!")
    );
  });
});

describe("Logout Regression", () => { 
  it("should logout successfully", async () => {
    await LoginPage.open();

    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining("You logged into a secure area!")
    );

    // Assuming there's a logout button to click
    await SecurePage.btnLogout.click();

    // Verify that the user is logged out
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining("You logged out of the secure area!")
    );
  });
});
