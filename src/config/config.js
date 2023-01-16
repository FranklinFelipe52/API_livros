module.exports = {
    development: {
      username: 'felipe',
      password: '1909',
      database: 'API_livros_development',
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
      define: {
        timestamps: true,
        underscored: true
      }
    },
    test: {
      username:'felipe',
      password: '1909',
      database:'API_livros_test',
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
      define: {
        timestamps: true,
        underscored: true
      }
    },
    production: {
      username: 'felipe',
      password: '1909',
      database:'API_livros_production',
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
      define: {
        timestamps: true,
        underscored: true
      }
    }
  };