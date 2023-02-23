export default async function logout(req, res) {
    req.logout()
    res.json({ success: true })
  }
  