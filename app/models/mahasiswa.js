"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mahasiswa.init(
    {
      nama: DataTypes.STRING,
      email: DataTypes.STRING,
      nomorHp: DataTypes.STRING,
      beasiswa: DataTypes.STRING,
      semester: DataTypes.INTEGER,
      ipk: DataTypes.FLOAT,
      berkas: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Mahasiswa",
    }
  );
  return Mahasiswa;
};
