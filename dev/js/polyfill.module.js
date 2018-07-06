export function ObjectAssign() {
	if (typeof Object.assign != 'function') {
		// Must be writable: true, enumerable: false, configurable: true
		Object.defineProperty(Object, "assign", {
			value: function assign(target, varArgs) { // .length of function is 2
				if (target == null) throw new TypeError('Cannot convert undefined or null to object');
				let to = Object(target);
				for (let index = 1; index < arguments.length; index++) {
					let nextSource = arguments[index];
					if (nextSource != null) {
						for (let nextKey in nextSource) {
							if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) to[nextKey] = nextSource[nextKey];
						}
					}
				}
				return to;
			},
			writable: true,
			configurable: true
		});
	}
}

export function NodeRemove() {
	// von:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
	(function (arr) {
		arr.forEach(function (item) {
			if (item.hasOwnProperty('remove')) return;
			Object.defineProperty(item, 'remove', {
				configurable: true,
				enumerable: true,
				writable: true,
				value: function remove() {
					if (this.parentNode !== null)
						this.parentNode.removeChild(this);
				}
			});
		});
	})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
}
