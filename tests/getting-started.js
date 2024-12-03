import { Selector } from "testcafe";
import { faker } from "@faker-js/faker";

fixture("Getting Started").page(
  "https://devexpress.github.io/testcafe/example"
);

test("My first test", async (t) => {
  // fill imput field
  const randomName = faker.person.fullName();
  await t.typeText("#developer-name", randomName);

  //click check boxes
  await t.click("#remote-testing");
  await t.click("#reusing-js-code");
  await t.click("#background-parallel-testing");
  await t.click("#continuous-integration-embedding");
  await t.click("#traffic-markup-analysis");

  //select operative system
  await t.click("#windows");

  //select testcafe interface
  const preferredInterfaceSelect = Selector("#preferred-interface");
  const preferredInterfaceOption = preferredInterfaceSelect.find("option");

  await t
    .click(preferredInterfaceSelect)
    .click(preferredInterfaceOption.withText("Both"));

  //click i have tried testcafe
  await t.click("#tried-test-cafe");

  //rate test cafe
  const slider = Selector("#slider");
  const sliderHandle = Selector(".ui-slider-handle");
  await t.click(slider).drag(sliderHandle, 360, 0, { offsetX: 0, offsetY: 5 });

  //fill what you think about testcafe
  const ramdomLorem = faker.lorem.paragraph();
  await t.typeText("#comments", ramdomLorem);

  //click submit button
  await t.click("#submit-button");

  //wait for the thank you message
  await t
    .expect(Selector("#article-header").innerText)
    .eql("Thank you, " + randomName + "!");

  //wait 5 seconds
  await t.wait(5000);
});
