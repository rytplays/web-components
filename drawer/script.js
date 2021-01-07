var drawer = function () 
{
  if (!Element.prototype.closest) 
  {
    if (!Element.prototype.matches) 
    {
			Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
		}
    Element.prototype.closest = function (s) 
    {
			var el = this;
			var ancestor = this;
			if (!document.documentElement.contains(el)) return null;
      do 
      {
				if (ancestor.matches(s)) return ancestor;
				ancestor = ancestor.parentElement;
			} while (ancestor !== null);
			return null;
		};
  }
  var settings = 
  {
		speedOpen: 50,
		speedClose: 350,
		activeClass: 'is-active',
		visibleClass: 'is-visible',
		selectorTarget: '[data-drawer-target]',
		selectorTrigger: '[data-drawer-trigger]',
		selectorClose: '[data-drawer-close]',
  };
  var toggleAccessibility = function (event) 
  {
    if (event.getAttribute('aria-expanded') === 'true') {event.setAttribute('aria-expanded', false);} 
    else { event.setAttribute('aria-expanded', true);}
	};
  var openDrawer = function (trigger) 
  {
		var target = document.getElementById(trigger.getAttribute('aria-controls'));
		target.classList.add(settings.activeClass);
		document.documentElement.style.overflow = 'hidden';
		toggleAccessibility(trigger);
    setTimeout(function () 
    {
			target.classList.add(settings.visibleClass);
		}, settings.speedOpen);
	};
  var closeDrawer = function (event) 
  {
		var closestParent = event.closest(settings.selectorTarget),
			  childrenTrigger = document.querySelector('[aria-controls="' + closestParent.id + '"');
		closestParent.classList.remove(settings.visibleClass);
		document.documentElement.style.overflow = '';
		toggleAccessibility(childrenTrigger);
    setTimeout(function () 
    {
			closestParent.classList.remove(settings.activeClass);
		}, settings.speedClose);

	};
  var clickHandler = function (event) 
  {
		var toggle = event.target,
			open = toggle.closest(settings.selectorTrigger),
			close = toggle.closest(settings.selectorClose);

    if (open) { openDrawer(open); }
    if (close) { closeDrawer(close); }
	};
	document.addEventListener('click', clickHandler, false);
};