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
