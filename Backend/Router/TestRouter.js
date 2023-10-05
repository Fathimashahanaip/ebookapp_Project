const express=require("express")
const UserSignup = require("../Controller/UserSignup")
const Login = require("../Controller/LOgin")
const AdminSignup = require("../Controller/AdminSignup")
const Addbook = require("../Controller/Admin/AdminAdd")
const AdminBookView = require("../Controller/Admin/AdminBookView")
const AdminBookEdit = require("../Controller/Admin/AdminBookEdit")
const AdminBookDelete = require("../Controller/Admin/AdminBookDelete")
// const AdminEditbookView = require("../Controller/Admin/AdminEditView")
const AdminLog = require("../Controller/Admin/AdminHomeLogin")
const userLog = require("../Controller/User/UserHomeLogin")
const Userbookview = require("../Controller/User/UserBooksView")
const Client = require("../Schemas/ClientSchema")
const ClientAdd = require("../Controller/Admin/AdminClientAdd")
const Teams = require("../Controller/Admin/AdminTeamMemberAdd")
const CardView = require("../Controller/User/Cardview")
const UserBookSearch = require("../Controller/User/UserBookSearch")
const ClientView = require("../Controller/Admin/ClientView")
const Teamview = require("../Controller/Admin/AdminTeamView")
const ClientSingleView = require("../Controller/Admin/AdminClientSingleView")
const ClientEdit = require("../Controller/Admin/AdminClientEdit")
const ClientDelete = require("../Controller/Admin/AdminClientRemove")
const TeamEdit = require("../Controller/Admin/AdminTeamEdit")
const TeamDelete = require("../Controller/Admin/AdminTeamDelete")
// const Login1 = require("../Login1")







const router=express.Router()
router.route("/usersignup").post(UserSignup)
router.route("/adminsignup").post(AdminSignup)
router.route("/login").post(Login)
router.route("/adbookadd").post(Addbook)
router.route("/adminbookview").get(AdminBookView)
router.route("/adminbookedit/:id").put(AdminBookEdit)
router.route("/adminbookdelete/:id").delete(AdminBookDelete)
// router.route("/editview/:id").get(AdminEditbookView)
router.route("/Adminhomelog").get(AdminLog)
router.route("/userhomelog").get(userLog)
router.route("/userbookview").get(Userbookview)
router.route("/adminbookeditview/:id").get(AdminBookEdit)
// router.route("/login1").post(Login1)
router.route("/clientadd").post(ClientAdd)
router.route("/teamadd").post(Teams)
router.route('/cardview/:id').get(CardView)
router.route('/userbooksearch/:Category').get(UserBookSearch)
router.route('/clientview').get(ClientView)
router.route('/teamview').get(Teamview)

router.route('/clientsingleview/:id').get(ClientSingleView)
router.route('/clientssview/:id').get(ClientEdit)
router.route('/clientedit/:id').put(ClientEdit)
router.route('/clientdelete/:id').delete(ClientDelete)

router.route('/teamsview/:id').get(TeamEdit)
router.route('/teamedit/:id').put(TeamEdit)
router.route('/teamdelete/:id').delete(TeamDelete)



module.exports=router