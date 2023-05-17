const mahasiswaService = require("../services/mahasiswaService");

module.exports = {
  async getAll(req, res) {
    try {
      const data = await mahasiswaService.getAll();
      if (data.length == 0) {
        return res.status(404).json({
          status: "error",
          message: "Data mahasiswa kosong, Silahkan input terlebih dahulu",
        });
      } else {
        return res.status(200).json({
          status: "success",
          message: "Data mahasiswa berhasil ditampilkan",
          data: data,
        });
      }
    } catch (error) {
      return res.status(404).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async getById(req, res) {
    try {
      const data = await mahasiswaService.getById(req.params.id);
      if (!data) {
        return res.status(404).json({
          status: "error",
          message: "Data mahasiswa tidak ditemukan",
        });
      } else {
        return res.status(200).json({
          status: "success",
          message: "Data mahasiswa berhasil ditampilkan",
          data: data,
        });
      }
    } catch (error) {
      return res.status(404).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async create(req, res) {
    try {
      const data = await mahasiswaService.create({
        ...req.body,
        status: "belum di verifikasi",
      });
      return res.status(201).json({
        status: "success",
        message: "Data mahasiswa berhasil dibuat",
        data: data,
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async update(req, res) {
    try {
      await mahasiswaService.update(req.params.id, {
        ...req.body,
        status: "belum di verifikasi",
      });
      const data = await mahasiswaService.getById(req.params.id);
      if (!data) {
        return res.status(404).json({
          status: "error",
          message: "Data mahasiswa tidak ditemukan",
        });
      } else {
        return res.status(200).json({
          status: "success",
          message: "Data mahasiswa berhasil diubah",
          data: data,
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async delete(req, res) {
    try {
      const data = await mahasiswaService.delete(req.params.id);
      if (data === 1) {
        return res.status(200).json({
          status: "success",
          message: "Data mahasiswa berhasil dihapus",
        });
      } else {
        return res.status(404).json({
          status: "error",
          message: "Data mahasiswa tidak ditemukan",
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
};
