const { Mahasiswa } = require("../models");

module.exports = {
  async getAll() {
    try {
      return await Mahasiswa.findAll();
    } catch (error) {
      throw error;
    }
  },

  async getById(id) {
    try {
      return await Mahasiswa.findOne({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async create(createData) {
    try {
      return await Mahasiswa.create(createData);
    } catch (error) {
      throw error;
    }
  },

  async update(id, updateData) {
    try {
      return await Mahasiswa.update(updateData, {
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async delete(id) {
    try {
      return await Mahasiswa.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  },
};
