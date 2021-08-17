const db = require('../../config/db')

module.exports = {
  all(callback) {
    db.query(`SELECT *
    FROM recipes
    ORDER BY title ASC`, (err, results) => {
      if (err) throw `Database error! ${err}`

      callback(results.rows)
    })
  },
  create(data, callback) {
    const query = `
      INSERT INTO recipes (
        image,
        title,
        ingredients,
        preparation,
        created_at,
        chef_id
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `

    const values = [
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.created_at,
      data.chef
    ]

    db.query(query, values, (err, results) => {
      if (err) throw `Database error! ${err}`

      callback(resuls.rows[0])
    })
  }
}