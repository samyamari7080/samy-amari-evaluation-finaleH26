describe("Parcours emprunts", () => {
  it("affiche les emprunts d'un utilisateur après soumission du formulaire", () => {
    cy.visit("/emprunts");

    cy.get("input[type=email]").type("jean.dupont@biblio.com");

    cy.contains("Voir mes emprunts").click();

    // Vérifie le titre du livre
    cy.contains("Le Petit Prince").should("exist");

    // Vérifie l'auteur
    cy.contains("Antoine de Saint-Exupéry").should("exist");

    // Vérifie la présence de la date d'emprunt
    cy.contains("Emprunt").should("exist");

    // Vérifie la présence de la date de retour prévue
    cy.contains("Retour prévu").should("exist");
  });
});