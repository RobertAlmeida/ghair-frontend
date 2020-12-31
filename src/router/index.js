import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Agendamento from "../views/ListaAgendamento.vue";
import Profissionais from "../views/Profissionais.vue";
import Servicos from "../views/Servicos.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [{
	path: "/",
	name: "Dashboard",
	component: Dashboard
},
{
	path: "/login",
	name: "Login",
	component: Login
},
{
	path: "/agendamento",
	name: "Agendamento",
	component: Agendamento
},
{
	path: "/profissionais",
	name: "Profissionais",
	component: Profissionais
},
{
	path: "/servicos",
	name: "Servicos",
	component: Servicos
}
];

const router = new VueRouter({
	mode: "history",
	routes
});

export default router;