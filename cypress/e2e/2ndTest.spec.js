const { DataRowOutlet } = require("@angular/cdk/table")
const { get } = require("core-js/core/dict")

describe('2nd test suite', () => {

    it('Radio Buttons', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons).eq(0).check({ force: true }).should('be.checked')
            cy.wrap(radioButtons).eq(1).check({ force: true })
            cy.wrap(radioButtons).eq(0).should('not.be.checked')
            cy.wrap(radioButtons).eq(2).should('be.disabled')
        })

    })

    it('Check Boxes', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        cy.get('[type="checkbox"]').eq(0).click({ force: true })
        cy.get('[type="checkbox"]').eq(1).check({ force: true })
        //cy.get('[type="checkbox"]').check({ force: true })
        //cy.get('[type="checkbox"]').uncheck({ force: true })


    })

    // // Wev Data Pickers 1part
    it('Check Boxes', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        let date = new Date()
        date.setDate(date.getDate() + 5)
        let futureDate = date.getDate()
        let dateToAssert = `Oct ${futureDate}, 2024`


        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            cy.get('.day-cell').not('.bounding-month').contains(futureDate).click()
            cy.wrap(input).invoke('prop', 'value').should('contain', dateToAssert)
            cy.wrap(input).should('have.value', dateToAssert)

        })
    })

    // Web Date Pickers (part 2)
it.only('Check Boxes', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Datepicker').click()

    // Генерация будущей даты
    let date = new Date()
    date.setDate(date.getDate() + 2)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleDateString('en-GB', { month: 'short' })
    let futureYear = date.getFullYear();
    let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`

    // Открытие Datepicker и выбор даты
    cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
        cy.wrap(input).click()

        // Функция для выбора дня
        function selectDayFromCurrent() {
            return cy.get('nb-calendar-pageable-navigation')
                .invoke('attr', 'ng-reflect-date')
                .then(dateAttribute => {
                    const currentYear = new Date(dateAttribute).getFullYear();
                    const currentMonth = new Date(dateAttribute).toLocaleDateString('en-GB', { month: 'short' })

                    // Проверяем отдельно год и месяц
                    if (currentYear !== futureYear || currentMonth !== futureMonth) {
                        cy.get('[data-name="chevron-right"]').click({ force: true });
                        return selectDayFromCurrent(); // Рекурсивный вызов для продолжения поиска
                    } else {
                        // Клик по ячейке с нужным днем
                        return cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
                    }
                });
        }

        // Вызов функции для выбора даты
        selectDayFromCurrent()

        // Проверка выбранного значения в инпуте
        cy.wrap(input).invoke('prop', 'value').should('contain', dateToAssert)
        cy.wrap(input).should('have.value', dateToAssert)
    })
})
})