const admin = require("firebase-admin");

const serviceAccount = require("./teste.json"); // Substitua pelo caminho correto do seu arquivo de configuração de sua chave do firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  
});

const email = "lucas.calu@outlook.com"; // Substitua pelo email que você deseja verificar
const password = "123456"; // Substitua pela senha que você deseja verificar

admin
  .auth()
  .getUserByEmail(email)
  .then((userRecord) => {
    // O usuário existe, mas não há autenticação direta aqui
    console.log("Usuário encontrado:", userRecord);
  })
  .catch((error) => {
    console.error("Erro ao buscar usuário:", error);

    // Se o usuário não for encontrado, você pode considerar as credenciais inválidas
    if (error.code === "auth/user-not-found") {
      console.log("Credenciais inválidas.");
    }
  });
