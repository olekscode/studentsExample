$('document').ready(function () {

	var controller = {
		getData: function () {
			return $('form').find('#newEnter').val()
		},
		sendRequest: function (data) {
			var res = null;
			$.post("/newphrase", data)
				.done(function (data) {					
					loginView.init(data);
				})			
		}
	}

	var loginView = {
		init: function (data) {			
			$('.border').empty();
			$('.border').html(this.createFragment(data));
			$('#myModal').modal('hide');
		},
		text: function (data) {
			var text = document.createElement('h3');
			text.innerText = "Your code phrase: " + data;
			return text
		},
		changeButton: function () {
			var change = document.createElement('button');
			change.innerText = "Change";
			change.className = 'btn btn-info'
			return change
		},
		exit: function () {
			var exit = document.createElement('button');
			exit.innerText = "Exit";
			exit.className = 'btn btn-warning'
			$(exit).on('click', function (e) {
				window.location.reload();
			})
			return exit
		},
		createFragment(data){
			var element = document.createDocumentFragment();
			element.appendChild(this.text(data));
			element.appendChild(this.changeButton());
			element.appendChild(this.exit());
			return element
		}
	}

	$('#login').on('click', function (e) {
		e.preventDefault();

		var data = {
			"phrase": $('form').find('#enter').val()
		};

		$.post("/login", data)
			.done(function (res) {
				$('.border').empty();
				var text = document.createElement('h3');
				text.innerText = "Your code phrase: " + res;
				var element = document.createDocumentFragment();
				element.appendChild(text);
				var change = document.createElement('button');
				change.innerText = "Change";
				change.className = 'btn btn-info'
				element.appendChild(change);
				var exit = document.createElement('button');
				exit.innerText = "Exit";
				exit.className = 'btn btn-warning'
				$(exit).on('click', function (e) {
					window.location.reload();
				})
				element.appendChild(exit);
				$('.border').html(element);

			})
			.fail(function () {
				alert('Wrong code phrase')
			});

	})

	$('#register').on('click', function (e) {
		e.preventDefault();
	})

	$('#createNewPhase').on('click', function (e) {
		e.preventDefault();
		controller.sendRequest(controller.getData());		
		
	})
})
