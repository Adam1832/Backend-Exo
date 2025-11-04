import connection from './connexion_bdd.js';



// Fonction pour insérer un utilisateur dans la base de données
const insert_user(user) => {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const values = [user.name, user.email];
    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error inserting user:', err);
        } else {
            console.log('User inserted with ID:', results.insertId);
        }
    });
};
