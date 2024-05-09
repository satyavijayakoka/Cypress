///<reference types  = "Cypress"/>

describe('list of users GET,POST,PUT,DELETE', function () {
    let token = "956e38dfc3c6f27c212a3c058cf11d52bbc76dced2c4453459ab7a206a672acb"
    let id = undefined
    it('list of user', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                "Authorization": "Bearer 956e38dfc3c6f27c212a3c058cf11d52bbc76dced2c4453459ab7a206a672acb"

            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eq(200)
        })
    })

    // create --------> id -------------> updateuser ----------> delete
    it.only('create update and delete user', function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `tenali.ramakrishna@15${Math.random()*10000 + 1}.com`,
                status: "active"

            },
            headers: {
            "Authorization": `Bearer ${token}`
        }
        })
        .then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(201)
            cy.log(response.body.id)
            id = response.body.id
        })
        .then(function(){
            cy.request({
                method:"PUT",
                url:`https://gorest.co.in/public/v2/users/${id}`,
                body: {
                    name: "Tenali Ramakrishna",
                    email: `tenali.ramakrishna@15${Math.random()*10000 + 1}.com`,
                    status: "active"
    
                },
                headers:{
                    "Authorization": `Bearer ${token}`  
                }
            })
            .then(function(response){
                expect(response.status).to.eq(200)
            })
            .then(function(){
                cy.request({
                    method:"DELETE",
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    headers:{
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(function(response){
                    expect(response.status).to.eq(204)
                })

            })
        })
})
})