describe('API Testing with Cypress', () => {
    it('should create a user successfully', () => {
        const requestBody = {
            name: "Kseniia",
            job: "Antoshchenko"
        };

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: requestBody
        }).then((response) => {
            // Assertions
            expect(response.status).to.eq(201); // Expect status code 201 Created
            expect(response.body).to.have.property('name', 'Kseniia'); // Check if name is correct
            expect(response.body).to.have.property('job', 'Antoshchenko'); // Check if job is correct
            expect(response.body).to.have.property('id'); // Check if id is present
            expect(response.body).to.have.property('createdAt'); // Check if createdAt is present
        });
    });
});
