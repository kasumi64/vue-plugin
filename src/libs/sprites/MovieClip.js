import Vue from 'vue';
import MsgPopup from './Msg-Popup.vue';

const Iface = Object.create(null);

const MsgClass = Vue.extend(MsgPopup);
var msgInstance
Iface.message = option => {
	var data = option || {};
	// if(msgInstance) msgInstance.close();
	msgInstance = new MsgClass({propsData: data});
	msgInstance.$mount();
	document.body.appendChild(msgInstance.$el);
};

//episode

export default Iface;