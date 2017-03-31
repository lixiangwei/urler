var pullToRefresh = function(element, callback) {
	var config = {
		max: 30,
		cubic:"cubic-bezier(0, 1.09, 0.22, 0.93)"
	};
	
	if(!element || element.nodeType !== 1) {
		return;
	}
	
	//������¼���ݣ��������е�ʱ����¼��ڲ���������
	var _temp = {};
	
	//��¼��ָ���������Ļ��λ��
	element.addEventListener("touchstart", function(event) {
		var touch = event.touches[0];
		_temp.startY = touch.pageY;
	}, false);
	
	//����Ԫ��������ָ������λ��
	element.addEventListener("touchmove", function(event) {
		var touch = event.touches[0];
		_temp.endY = touch.pageY;
		_temp.distance = _temp.endY - _temp.startY;
		//��������
		if(element.getBoundingClientRect().top  == 0) {
			_temp.direction = 0;
		//�ײ�����
		}else if(element.getBoundingClientRect().top == window.pageYOffset) {
			_temp.direction = 1;
			//element.style.cssText = "margin-bottom:"+ damping(_temp.distance) + "px";
		}
		//element.style.cssText = "margin-top:"+ damping(_temp.distance) + "px";
		console.log(_temp)
		console.log(element.getBoundingClientRect().top, window.pageYOffset)
	}, false);
	
	//���ƶ������ָλ�ú����λ�öԱ�ȷ���ǲ��Ƿ������϶�����
	element.addEventListener("touchend", function(event) {
		//����
		if(_temp.endY - _temp.startY > config.max) {
			callback();
			//���϶���Ԫ�ظ�λ
			element.style.cssText = "margin-top:0px;transition:all 600ms "+config.cubic;
		//����
		}else if(_temp.startY - _temp.endY > config.max){
			callback();
			//���϶���Ԫ�ظ�λ
			element.style.cssText = "margin-bottom:0px;transition:all 600ms "+config.cubic;
		}
	}, false);
	
	//������㣬������������ʱ����������һ������Ȼ�ͱ��ƽ����
	var damping = function (value) {
		var step = [20, 40, 60, 80, 100];
		var rate = [0.5, 0.4, 0.3, 0.2, 0.1];

		var scaleedValue = value;
		var valueStepIndex = step.length;

		while (valueStepIndex--) {
			if (value > step[valueStepIndex]) {
				scaleedValue = (value - step[valueStepIndex]) * rate[valueStepIndex];
				for (var i = valueStepIndex; i > 0; i--) {
					scaleedValue += (step[i] - step[i - 1]) * rate[i - 1];
				}
				scaleedValue += step[0] * 1;
				break;
			}
		}
		return scaleedValue;
	};
}
