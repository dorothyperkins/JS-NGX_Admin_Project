
import { navigateTo } from "../support/page_objects/navigationPage.js";
import { onFormLayoutsPage } from "../support/page_objects/cypress/support/formLayoutsPage.js";
import { onDatePickerPage } from "../support/page_objects/cypress/support/datePickerPage.js";
import { onSmartTablePage } from "../support/page_objects/cypress/support/smartTablePage.js";



describe('Test with Page Objects', () => {

    beforeEach('Open application', () => {
        cy.openHomePage()
    })

    it('Verify navigation across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })

    it('Verify navigation across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })
    it(' Should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Kseniia', 'dorothyperkins420@gmail.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('dorothyperkins420@gmail.com', '12345')
        cy.wait(500)
        navigateTo.datepickerPage()  
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Kseniia', 'Antoshchenko')
        onSmartTablePage.updateAgeByFirstName('Kseniia', '32')
        onSmartTablePage.deleteRowByIndex(1)
    })
})