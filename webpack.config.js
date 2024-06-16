const path = require('path');

module.exports = {
  entry: './src/ex10/index.ts',   // Point d'entrée de ton application
  output: {
    filename: 'bundle.js',   // Nom du fichier de sortie
    path: path.resolve(__dirname, 'dist')  // Répertoire de sortie
  },
  module: {
    rules: [
      {
        test: /\.ts$/,   // Appliquer ts-loader aux fichiers TypeScript
        use: 'ts-loader',  // Utiliser ts-loader pour transpiler les fichiers TypeScript
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']   // Extensions de fichiers à résoudre
  },
  mode: 'development'   // Mode de développement
};