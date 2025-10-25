export const publicProfile = (req, res) => {
  const username = req.params.username;
  res.render("public-profile", {
    title: username,
    username: username,
    bio: "Hiduplah seperti Lary Si Lobster",
  });
};

export const profile = (req, res) => {
  const nama = req.params.nama;
  res.send(`Halo, nama saya adalah ${nama}`);
};

export const privateProfile = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      message: "Private profile berhasil di akses",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};
