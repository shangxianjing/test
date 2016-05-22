/*
Author: mg12
Feature: MenuList with slide menus
Update: 2008/09/03
Tutorial URL: http://www.neoease.com/wordpress-menubar-4/
*/

/** �� */
var Class = {
	create: function() {
		return function() {
			this.initialize.apply(this, arguments);
		}
	}
}

/** �˵��б� */
var MenuList = Class.create();
MenuList.prototype = {

	/**
	 * ���췽��
	 * id: �˵��б�
	 * opacity: ��͸���� (0.0 - 1.0, 0.0 Ϊȫ͸��, 1.0 Ϊ��͸��)
	 */
	initialize: function(id, opacity, speed) {
		// ��ȡ�˵��б�
		this.obj = document.getElementById(id);
		if (!this.obj) { return; }

		// �Բ˵��б��ڵ����в˵����д���
		var menus = this.obj.childNodes;
		for (var i = 0; i < menus.length; i++) {
			var menu = menus[i];
			if (menu.tagName == 'LI') {
				// �����˵�
				new Menu(menu, opacity, speed);
			}
		}
	}
}

/** �˵� */
var Menu = Class.create();
Menu.prototype = {

	/**
	 * ���췽��
	 * target: Ŀ��˵�
	 * opacity: ��͸���� (0.0 - 1.0, 0.0 Ϊȫ͸��, 1.0 Ϊ��͸��)
	 */
	initialize: function(target, opacity, speed) {
		this.util = new MenuUtil();

		// ��ȡĿ��˵� (û����Ԫ��)
		this.obj = this.util.cleanWhitespace(target);

		/* slide 2008/09/03 CHANGE START */
		// ���岻͸����
		this.opacity = opacity || 1;
		/* slide 2008/09/03 CHANGE END */

		/* slide 2008/09/03 ADD START */
		// ���廬���ٶ�
		this.speed = speed || 20;
		/* slide 2008/09/03 ADD END */

		// ��ȡ�˵�
		this.menu = this.obj.childNodes

		// ��Ҫ! ����˵��������˵���, �򲻽��д���
		if (this.menu.length < 2) { return; }

		// �˵�����Ͳ˵���
		this.title = this.menu[0];
		this.body = this.menu[1];

		// �����ʼ��ʽ
		this.util.setStyle(this.body, 'visibility', 'hidden');
		this.util.setStyle(this.body, 'position', 'absolute');
		this.util.setStyle(this.body, 'overflow', 'hidden');
		this.util.setStyle(this.body, 'display', 'block');

		/* slide 2008/09/03 ADD START */
		this.util.setStyle(this.body, 'height', '0');
		/* slide 2008/09/03 ADD END */

		// ��Ӽ�����
		this.addListener(this.obj, 'mouseover', this.util.bind(this, this.activate), false);
		this.addListener(this.obj, 'mouseout', this.util.bind(this, this.deactivate), false);
	},

	/**
	 * �����
	 * ������ƶ����˵������Ǽ���
	 */
	activate: function() {
		// ��ȡ��ǰ�˵����λ��
		var pos = this.util.cumulativeOffset(this.title);
		var left = pos[0];
		var top = pos[1] + this.util.getHeight(this.title);

		// ���弤��ʱ��ʽ
		this.util.setStyle(this.body, 'left', left + 'px');
		this.util.setStyle(this.body, 'top', top + 'px');
		this.util.setStyle(this.body, 'visibility', 'visible');
		this.util.setStyle(this.body, 'opacity', this.opacity);
		this.util.setStyle(this.body, 'filter', 'alpha(opacity=' + this.opacity * 100 + ')');

		/* slide 2008/09/03 ADD START */
		// ʮ��ʮ��ʮ����Ҫ START

		// ��ó�ʼ�߶�, ������ڲ˵�������ʱ���չ��ʱ�ĳ�ʼ�߶�, ������ڲ˵�����ʱȡ�ò˵���ʵ�ʸ߶�
		var initHeight = this.util.getStyle(this.body, 'height');
		// ���ʵ�ʸ߶�, �����������ʽ�ĸ߶�, ����ֻ��õ���ʽ�еĸ߶�
		this.util.setStyle(this.body, 'height', '');
		this.height = this.util.getHeight(this.body);
		// �����趨��ʼ�߶�
		this.util.setStyle(this.body, 'height', initHeight);

		// ʮ��ʮ��ʮ����Ҫ END
		/* slide 2008/09/03 ADD END */

		/* shade 2008/09/01 ADD START */
		if(this.tid) {
			clearTimeout(this.tid);
		}
		/* slide 2008/09/03 CHANGE START */
		// չ���˵�
		this.tid = setInterval(this.util.bind(this, this.expand), 10);
		/* slide 2008/09/03 CHANGE END */
		/* shade 2008/09/01 ADD END */
	},

	/**
	 * �������
	 * ������ƶ����˵������Ǽ���
	 */
	deactivate: function(){
		/* shade 2008/09/01 ADD START */
		if(this.tid) {
			clearTimeout(this.tid);
		}
		/* slide 2008/09/03 CHANGE START */
		// �۵��˵�
		this.tid = setInterval(this.util.bind(this, this.collapse), 10);
		/* slide 2008/09/03 CHANGE END */

		/* shade 2008/09/01 DELETE START */
		// ������ʱ��ʽ
		//this.util.setStyle(this.body, 'visibility', 'hidden');
		/* shade 2008/09/01 DELETE END */
	},

	/* slide 2008/09/03 ADD START */
	/**
	 * չ���˵�, ֱ�����߶�
	 */
	expand: function() {
		// ��ȡ��ǰ�߶�, �����ͻ�
		var height = parseInt(this.util.getStyle(this.body, 'height'));
		// ��ʱ�䵥λ�ڼ����ٶ�, ֱ���߶ȵ��ڻ򳬹����߶�
		height += this.speed;
		if(height >= this.height) {
			height = this.height;
			// ȡ��ѭ������
			clearTimeout(this.tid);
		}
		// �����趨�˵��߶�
		this.util.setStyle(this.body, 'height', height + 'px');
	},

	/**
	 * �۵��˵�, ֱ���߶�Ϊ 1 ʱ���ز˵�
	 */
	collapse:function() {
		// ��ȡ��ǰ�߶�, �����ͻ�
		var height = parseInt(this.util.getStyle(this.body, 'height'));
		// ��ʱ�䵥λ�ڼ�ȥ�ٶ�, ֱ���߶ȵ��ڻ�С�� 1
		height -= this.speed;
		if(height <= 0) {
			height = 0;
			// ���ز˵�
			this.util.setStyle(this.body, 'visibility', 'hidden');
			// ȡ��ѭ������
			clearTimeout(this.tid);
		}
		// �����趨�˵��߶�
		this.util.setStyle(this.body, 'height', height + 'px');
	},
	/* slide 2008/09/03 ADD END */

	/**
	 * ��������
	 * element: ��������
	 * name: ��������
	 * observer: ִ�еķ���
	 * useCapture: ����������¼��ķ�ʽ (true Ϊ Capture ��ʽ, false Ϊ Bubbling ��ʽ)
	 */
	addListener: function(element, name, observer, useCapture) {
		if(element.addEventListener) {
			element.addEventListener(name, observer, useCapture);
		} else if(element.attachEvent) {
			element.attachEvent('on' + name, observer);
		}
	}
}

/** һЩʵ�õķ��� */
var MenuUtil = Class.create();
MenuUtil.prototype = {
	initialize: function() {
	},

	$: function(id) {
		return document.getElementById(id);
	},

	$A: function(iterable) {
		if(!iterable) {
			return [];
		}
		if(iterable.toArray) {
			return iterable.toArray();
		} else {
			var results = [];
			for(var i = 0; i < iterable.length; i++) {
				results.push(iterable[i]);
			}
			return results;
		}
	},

	bind: function() {
		var array = this.$A(arguments);
		var func = array[array.length - 1];
		var _method = func, args = array, object = args.shift();
		return function() {
			return _method.apply(object, args.concat(array));
		}
	},

	getHeight: function(element) {
		return element.offsetHeight;
	},

	setStyle: function(element, key, value) {
		element.style[key] = value;
	},

	getStyle: function(element, key) {
		return element.style[key];
	},

	cleanWhitespace: function(list) {
		var node = list.firstChild;
		while (node) {
			var nextNode = node.nextSibling;
			if(node.nodeType == 3 && !/\S/.test(node.nodeValue)) {
				list.removeChild(node);
			}
			node = nextNode;
		}
		return list;
	},

	cumulativeOffset: function(element) {
		var valueT = 0, valueL = 0;
		do {
			valueT += element.offsetTop  || 0;
			valueL += element.offsetLeft || 0;
			element = element.offsetParent;
		} while (element);
		return [valueL, valueT];
	}
}

/** ��ӵ�ҳ������¼� */
window.onload = function(e) {
	new MenuList('menus', 0.9);
}
