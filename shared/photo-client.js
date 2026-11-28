// \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), c = (e, n) => {
	let r = Object.setPrototypeOf({}, null);
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n & 1 || t(r, Symbol.toStringTag, { value: "Module" }), n & 2 ? r : Object.preventExtensions(r);
}, l = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (let c of r(i)) !a.call(e, c) && c !== o && (s = n(i, c), t(e, c, {
		get: s && s.get && !s.configurable ? s.get : () => i[c],
		enumerable: !s || s.enumerable
	}));
	return e;
}, u = (n, r, o) => (o = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), d = (e) => a.call(e, "module.exports") ? e["module.exports"] : l(t({}, "__esModule", { value: !0 }), e), f = document.createElement("i");
function p(e) {
	let t = "&" + e + ";";
	f.innerHTML = t;
	let n = f.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" ? !1 : n !== t && n;
}
// node_modules/.pnpm/micromark-util-chunked@2.0.1/node_modules/micromark-util-chunked/index.js
function m(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function h(e, t) {
	return e.length > 0 ? (m(e, e.length, 0, t), e) : t;
}
// node_modules/.pnpm/micromark-util-combine-extensions@2.0.1/node_modules/micromark-util-combine-extensions/index.js
var g = {}.hasOwnProperty;
function _(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) v(t, e[n]);
	return t;
}
function v(e, t) {
	let n;
	for (n in t) {
		let r = (g.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			g.call(r, a) || (r[a] = []);
			let e = i[a];
			y(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function y(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	m(e, 0, 0, r);
}
function b(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) x(t, e[n]);
	return t;
}
function x(e, t) {
	let n;
	for (n in t) {
		let r = (g.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) r[a] = i[a];
	}
}
// node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.2/node_modules/micromark-util-decode-numeric-character-reference/index.js
function ee(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
// node_modules/.pnpm/micromark-util-encode@2.0.1/node_modules/micromark-util-encode/index.js
var S = {
	"\"": "quot",
	"&": "amp",
	"<": "lt",
	">": "gt"
};
function C(e) {
	return e.replace(/["&<>]/g, t);
	function t(e) {
		return "&" + S[e] + ";";
	}
}
// node_modules/.pnpm/micromark-util-normalize-identifier@2.0.1/node_modules/micromark-util-normalize-identifier/index.js
function w(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
// node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/index.js
var T = F(/[A-Za-z]/), E = F(/[\dA-Za-z]/), D = F(/[#-'*+\--9=?A-Z^-~]/);
function O(e) {
	return e !== null && (e < 32 || e === 127);
}
var k = F(/\d/), A = F(/[\dA-Fa-f]/), te = F(/[!-/:-@[-`{-~]/);
function j(e) {
	return e !== null && e < -2;
}
function M(e) {
	return e !== null && (e < 0 || e === 32);
}
function N(e) {
	return e === -2 || e === -1 || e === 32;
}
var ne = F(/\p{P}|\p{S}/u), P = F(/\s/);
function F(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
// node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/index.js
function re(e, t) {
	let n = C(ie(e || ""));
	if (!t) return n;
	let r = n.indexOf(":"), i = n.indexOf("?"), a = n.indexOf("#"), o = n.indexOf("/");
	return r < 0 || o > -1 && r > o || i > -1 && r > i || a > -1 && r > a || t.test(n.slice(0, r)) ? n : "";
}
function ie(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && E(e.charCodeAt(n + 1)) && E(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
// node_modules/.pnpm/micromark@4.0.2_supports-color@10.2.2/node_modules/micromark/lib/compile.js
var ae = {}.hasOwnProperty, oe = /^(https?|ircs?|mailto|xmpp)$/i, se = /^https?$/i;
function ce(e) {
	let t = e || {}, n = !0, r = {}, i = [[]], a = [], o = [], s = b([{
		enter: {
			blockQuote: ne,
			codeFenced: ce,
			codeFencedFenceInfo: _,
			codeFencedFenceMeta: _,
			codeIndented: ue,
			codeText: We,
			content: Oe,
			definition: Se,
			definitionDestinationString: we,
			definitionLabelString: _,
			definitionTitleString: _,
			emphasis: He,
			htmlFlow: ze,
			htmlText: Ve,
			image: fe,
			label: _,
			link: pe,
			listItemMarker: te,
			listItemValue: A,
			listOrdered: O,
			listUnordered: k,
			paragraph: F,
			reference: _,
			resource: _e,
			resourceDestinationString: ve,
			resourceTitleString: _,
			setextHeading: Ae,
			strong: Ue
		},
		exit: {
			atxHeading: Me,
			atxHeadingSequence: ke,
			autolinkEmail: Qe,
			autolinkProtocol: Ze,
			blockQuote: P,
			characterEscapeValue: Fe,
			characterReferenceMarkerHexadecimal: Ye,
			characterReferenceMarkerNumeric: Ye,
			characterReferenceValue: Xe,
			codeFenced: de,
			codeFencedFence: le,
			codeFencedFenceInfo: I,
			codeFencedFenceMeta: D,
			codeFlowValue: Le,
			codeIndented: de,
			codeText: Ge,
			codeTextData: Fe,
			data: Fe,
			definition: De,
			definitionDestinationString: Te,
			definitionLabelString: Ce,
			definitionTitleString: Ee,
			emphasis: Ke,
			hardBreakEscape: Re,
			hardBreakTrailing: Re,
			htmlFlow: Be,
			htmlFlowData: Fe,
			htmlText: Be,
			htmlTextData: Fe,
			image: xe,
			label: he,
			labelText: me,
			lineEnding: Ie,
			link: xe,
			listOrdered: j,
			listUnordered: M,
			paragraph: ie,
			reference: D,
			referenceString: ge,
			resource: D,
			resourceDestinationString: ye,
			resourceTitleString: be,
			setextHeading: Pe,
			setextHeadingLineSequence: Ne,
			setextHeadingText: je,
			strong: qe,
			thematicBreak: Je
		}
	}, ...t.htmlExtensions || []]), c = {
		definitions: r,
		tightStack: o
	}, l = {
		buffer: _,
		encode: E,
		getData: g,
		lineEndingIfNeeded: T,
		options: t,
		raw: x,
		resume: v,
		setData: m,
		tag: y
	}, u = t.defaultLineEnding;
	return d;
	function d(e) {
		let t = -1, n = 0, r = [], a = [], o = [];
		for (; ++t < e.length;) u || e[t][1].type !== "lineEnding" && e[t][1].type !== "lineEndingBlank" || (u = e[t][2].sliceSerialize(e[t][1])), (e[t][1].type === "listOrdered" || e[t][1].type === "listUnordered") && (e[t][0] === "enter" ? r.push(t) : f(e.slice(r.pop(), t))), e[t][1].type === "definition" && (e[t][0] === "enter" ? (o = h(o, e.slice(n, t)), n = t) : (a = h(a, e.slice(n, t + 1)), n = t + 1));
		a = h(a, o), a = h(a, e.slice(n)), t = -1;
		let c = a;
		for (s.enter.null && s.enter.null.call(l); ++t < e.length;) {
			let e = s[c[t][0]], n = c[t][1].type, r = e[n];
			ae.call(e, n) && r && r.call({
				sliceSerialize: c[t][2].sliceSerialize,
				...l
			}, c[t][1]);
		}
		return s.exit.null && s.exit.null.call(l), i[0].join("");
	}
	function f(e) {
		let t = e.length, n = 0, r = 0, i = !1, a;
		for (; ++n < t;) {
			let t = e[n];
			if (t[1]._container) a = void 0, t[0] === "enter" ? r++ : r--;
			else switch (t[1].type) {
				case "listItemPrefix":
					t[0] === "exit" && (a = !0);
					break;
				case "linePrefix": break;
				case "lineEndingBlank":
					t[0] === "enter" && !r && (a ? a = void 0 : i = !0);
					break;
				default: a = void 0;
			}
		}
		e[0][1]._loose = i;
	}
	function m(e, t) {
		c[e] = t;
	}
	function g(e) {
		return c[e];
	}
	function _() {
		i.push([]);
	}
	function v() {
		return i.pop().join("");
	}
	function y(e) {
		n && (m("lastWasTag", !0), i[i.length - 1].push(e));
	}
	function x(e) {
		m("lastWasTag"), i[i.length - 1].push(e);
	}
	function S() {
		x(u || "\n");
	}
	function T() {
		let e = i[i.length - 1], t = e[e.length - 1], n = t ? t.charCodeAt(t.length - 1) : null;
		n !== 10 && n !== 13 && n !== null && S();
	}
	function E(e) {
		return g("ignoreEncode") ? e : C(e);
	}
	function D() {
		v();
	}
	function O(e) {
		o.push(!e._loose), T(), y("<ol"), m("expectFirstItem", !0);
	}
	function k(e) {
		o.push(!e._loose), T(), y("<ul"), m("expectFirstItem", !0);
	}
	function A(e) {
		if (g("expectFirstItem")) {
			let t = Number.parseInt(this.sliceSerialize(e), 10);
			t !== 1 && y(" start=\"" + E(String(t)) + "\"");
		}
	}
	function te() {
		g("expectFirstItem") ? y(">") : N(), T(), y("<li>"), m("expectFirstItem"), m("lastWasTag");
	}
	function j() {
		N(), o.pop(), S(), y("</ol>");
	}
	function M() {
		N(), o.pop(), S(), y("</ul>");
	}
	function N() {
		g("lastWasTag") && !g("slurpAllLineEndings") && T(), y("</li>"), m("slurpAllLineEndings");
	}
	function ne() {
		o.push(!1), T(), y("<blockquote>");
	}
	function P() {
		o.pop(), T(), y("</blockquote>"), m("slurpAllLineEndings");
	}
	function F() {
		o[o.length - 1] || (T(), y("<p>")), m("slurpAllLineEndings");
	}
	function ie() {
		o[o.length - 1] ? m("slurpAllLineEndings", !0) : y("</p>");
	}
	function ce() {
		T(), y("<pre><code"), m("fencesCount", 0);
	}
	function I() {
		y(" class=\"language-" + v() + "\"");
	}
	function le() {
		let e = g("fencesCount") || 0;
		e || (y(">"), m("slurpOneLineEnding", !0)), m("fencesCount", e + 1);
	}
	function ue() {
		T(), y("<pre><code>");
	}
	function de() {
		let e = g("fencesCount");
		e !== void 0 && e < 2 && c.tightStack.length > 0 && !g("lastWasTag") && S(), g("flowCodeSeenData") && T(), y("</code></pre>"), e !== void 0 && e < 2 && T(), m("flowCodeSeenData"), m("fencesCount"), m("slurpOneLineEnding");
	}
	function fe() {
		a.push({ image: !0 }), n = void 0;
	}
	function pe() {
		a.push({});
	}
	function me(e) {
		a[a.length - 1].labelId = this.sliceSerialize(e);
	}
	function he() {
		a[a.length - 1].label = v();
	}
	function ge(e) {
		a[a.length - 1].referenceId = this.sliceSerialize(e);
	}
	function _e() {
		_(), a[a.length - 1].destination = "";
	}
	function ve() {
		_(), m("ignoreEncode", !0);
	}
	function ye() {
		a[a.length - 1].destination = v(), m("ignoreEncode");
	}
	function be() {
		a[a.length - 1].title = v();
	}
	function xe() {
		let e = a.length - 1, i = a[e], o = i.referenceId || i.labelId, s = i.destination === void 0 ? r[w(o)] : i;
		for (n = !0; e--;) if (a[e].image) {
			n = void 0;
			break;
		}
		i.image ? (y("<img src=\"" + re(s.destination, t.allowDangerousProtocol ? void 0 : se) + "\" alt=\""), x(i.label), y("\"")) : y("<a href=\"" + re(s.destination, t.allowDangerousProtocol ? void 0 : oe) + "\""), y(s.title ? " title=\"" + s.title + "\"" : ""), i.image ? y(" />") : (y(">"), x(i.label), y("</a>")), a.pop();
	}
	function Se() {
		_(), a.push({});
	}
	function Ce(e) {
		v(), a[a.length - 1].labelId = this.sliceSerialize(e);
	}
	function we() {
		_(), m("ignoreEncode", !0);
	}
	function Te() {
		a[a.length - 1].destination = v(), m("ignoreEncode");
	}
	function Ee() {
		a[a.length - 1].title = v();
	}
	function De() {
		let e = w(a[a.length - 1].labelId);
		v(), ae.call(r, e) || (r[e] = a[a.length - 1]), a.pop();
	}
	function Oe() {
		m("slurpAllLineEndings", !0);
	}
	function ke(e) {
		g("headingRank") || (m("headingRank", this.sliceSerialize(e).length), T(), y("<h" + g("headingRank") + ">"));
	}
	function Ae() {
		_(), m("slurpAllLineEndings");
	}
	function je() {
		m("slurpAllLineEndings", !0);
	}
	function Me() {
		y("</h" + g("headingRank") + ">"), m("headingRank");
	}
	function Ne(e) {
		m("headingRank", this.sliceSerialize(e).charCodeAt(0) === 61 ? 1 : 2);
	}
	function Pe() {
		let e = v();
		T(), y("<h" + g("headingRank") + ">"), x(e), y("</h" + g("headingRank") + ">"), m("slurpAllLineEndings"), m("headingRank");
	}
	function Fe(e) {
		x(E(this.sliceSerialize(e)));
	}
	function Ie(e) {
		g("slurpAllLineEndings") || (g("slurpOneLineEnding") ? m("slurpOneLineEnding") : g("inCodeText") ? x(" ") : x(E(this.sliceSerialize(e))));
	}
	function Le(e) {
		x(E(this.sliceSerialize(e))), m("flowCodeSeenData", !0);
	}
	function Re() {
		y("<br />");
	}
	function ze() {
		T(), Ve();
	}
	function Be() {
		m("ignoreEncode");
	}
	function Ve() {
		t.allowDangerousHtml && m("ignoreEncode", !0);
	}
	function He() {
		y("<em>");
	}
	function Ue() {
		y("<strong>");
	}
	function We() {
		m("inCodeText", !0), y("<code>");
	}
	function Ge() {
		m("inCodeText"), y("</code>");
	}
	function Ke() {
		y("</em>");
	}
	function qe() {
		y("</strong>");
	}
	function Je() {
		T(), y("<hr />");
	}
	function Ye(e) {
		m("characterReferenceType", e.type);
	}
	function Xe(e) {
		let t = this.sliceSerialize(e);
		x(E(g("characterReferenceType") ? ee(t, g("characterReferenceType") === "characterReferenceMarkerNumeric" ? 10 : 16) : p(t))), m("characterReferenceType");
	}
	function Ze(e) {
		let n = this.sliceSerialize(e);
		y("<a href=\"" + re(n, t.allowDangerousProtocol ? void 0 : oe) + "\">"), x(E(n)), y("</a>");
	}
	function Qe(e) {
		let t = this.sliceSerialize(e);
		y("<a href=\"" + re("mailto:" + t) + "\">"), x(E(t)), y("</a>");
	}
}
// node_modules/.pnpm/micromark-factory-space@2.0.1/node_modules/micromark-factory-space/index.js
function I(e, t, n, r) {
	let i = r ? r - 1 : 1e400, a = 0;
	return o;
	function o(r) {
		return N(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return N(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
// node_modules/.pnpm/micromark@4.0.2_supports-color@10.2.2/node_modules/micromark/lib/initialize/content.js
var le = { tokenize: ue };
function ue(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) e.consume(n);
		else return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), I(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
		else return j(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
// node_modules/.pnpm/micromark@4.0.2_supports-color@10.2.2/node_modules/micromark/lib/initialize/document.js
var de = { tokenize: pe }, fe = { tokenize: me };
function pe(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && y();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			v(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return m(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return h(a);
			t.interrupt = !(!i.currentConstruct || i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(fe, u, d)(a);
	}
	function u(e) {
		return i && y(), v(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, h(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(fe, p, h)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function h(n) {
		if (n === null) i && y(), v(0), e.consume(n);
		else return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), g(n);
	}
	function g(n) {
		if (n === null) _(e.exit("chunkFlow"), !0), v(0), e.consume(n);
		else return j(n) ? (e.consume(n), _(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), g);
	}
	function _(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (v(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			m(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function v(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function y() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function me(e, t, n) {
	return I(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
// node_modules/.pnpm/micromark-util-classify-character@2.0.1/node_modules/micromark-util-classify-character/index.js
function he(e) {
	if (e === null || M(e) || P(e)) return 1;
	if (ne(e)) return 2;
}
// node_modules/.pnpm/micromark-util-resolve-all@2.0.1/node_modules/micromark-util-resolve-all/index.js
function ge(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/attention.js
var _e = {
	name: "attention",
	resolveAll: ve,
	tokenize: ye
};
function ve(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			be(d, -c), be(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = h(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = h(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = h(l, ge(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = h(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = h(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, m(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function ye(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = he(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = he(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function be(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/autolink.js
var xe = {
	name: "autolink",
	tokenize: Se
};
function Se(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return T(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || E(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || E(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || O(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : D(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return E(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || E(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/blank-line.js
var Ce = {
	partial: !0,
	tokenize: we
};
function we(e, t, n) {
	return r;
	function r(t) {
		return N(t) ? I(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || j(e) ? t(e) : n(e);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/block-quote.js
var Te = {
	continuation: { tokenize: De },
	exit: Oe,
	name: "blockQuote",
	tokenize: Ee
};
function Ee(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return N(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function De(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return N(t) ? I(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(Te, t, n)(r);
	}
}
function Oe(e) {
	e.exit("blockQuote");
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/character-escape.js
var ke = {
	name: "characterEscape",
	tokenize: Ae
};
function Ae(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return te(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/character-reference.js
var je = {
	name: "characterReference",
	tokenize: Me
};
function Me(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = E, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = A, u) : (e.enter("characterReferenceValue"), a = 7, o = k, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === E && !p(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/code-fenced.js
var Ne = {
	partial: !0,
	tokenize: Ie
}, Pe = {
	concrete: !0,
	name: "codeFenced",
	tokenize: Fe
};
function Fe(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), N(t) ? I(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || j(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Ne, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || j(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : N(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), I(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || j(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || j(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && N(t) ? I(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || j(t) ? e.check(Ne, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || j(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), N(t) ? I(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), N(t) ? I(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || j(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function Ie(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/code-indented.js
var Le = {
	name: "codeIndented",
	tokenize: ze
}, Re = {
	partial: !0,
	tokenize: Be
};
function ze(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), I(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : j(t) ? e.attempt(Re, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || j(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function Be(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : j(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : I(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : j(e) ? i(e) : n(e);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/code-text.js
var Ve = {
	name: "codeText",
	previous: Ue,
	resolve: He,
	tokenize: We
};
function He(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function Ue(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function We(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : j(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || j(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
// node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var Ge = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? 1e400;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, 1e400);
		return n && Ke(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(1e400), this.left.pop();
	}
	push(e) {
		this.setCursor(1e400), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(1e400), Ke(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), Ke(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) {
			if (e < this.left.length) {
				let t = this.left.splice(e, 1e400);
				Ke(this.right, t.reverse());
			} else {
				let t = this.right.splice(this.left.length + this.right.length - e, 1e400);
				Ke(this.left, t.reverse());
			}
		}
	}
};
function Ke(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
// node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/index.js
function qe(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new Ge(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, Je(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (o[1].type !== "linePrefix" && o[1].type !== "listItemIndent") break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return m(e, 0, 1e400, u.slice(0)), !l;
}
function Je(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/content.js
var Ye = {
	resolve: Ze,
	tokenize: Qe
}, Xe = {
	partial: !0,
	tokenize: $e
};
function Ze(e) {
	return qe(e), e;
}
function Qe(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : j(t) ? e.check(Xe, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function $e(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), I(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || j(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
// node_modules/.pnpm/micromark-factory-destination@2.0.1/node_modules/micromark-factory-destination/index.js
function et(e, t, n, r, i, a, o, s, c) {
	let l = c || 1e400, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || O(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || j(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || M(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || O(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
// node_modules/.pnpm/micromark-factory-label@2.0.1/node_modules/micromark-factory-label/index.js
function tt(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || 
		/* c8 ignore next 3 */
		l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : j(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || j(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !N(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
// node_modules/.pnpm/micromark-factory-title@2.0.1/node_modules/micromark-factory-title/index.js
function nt(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : j(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), I(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || j(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
// node_modules/.pnpm/micromark-factory-whitespace@2.0.1/node_modules/micromark-factory-whitespace/index.js
function rt(e, t) {
	let n;
	return r;
	function r(i) {
		return j(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : N(i) ? I(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/definition.js
var it = {
	name: "definition",
	tokenize: ot
}, at = {
	partial: !0,
	tokenize: st
};
function ot(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return tt.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = w(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return M(t) ? rt(e, l)(t) : l(t);
	}
	function l(t) {
		return et(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(at, d, d)(t);
	}
	function d(t) {
		return N(t) ? I(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || j(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function st(e, t, n) {
	return r;
	function r(t) {
		return M(t) ? rt(e, i)(t) : n(t);
	}
	function i(t) {
		return nt(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return N(t) ? I(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || j(e) ? t(e) : n(e);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var ct = {
	name: "hardBreakEscape",
	tokenize: lt
};
function lt(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return j(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/heading-atx.js
var ut = {
	name: "headingAtx",
	resolve: dt,
	tokenize: ft
};
function dt(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, m(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function ft(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || M(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || j(n) ? (e.exit("atxHeading"), t(n)) : N(n) ? I(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || M(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
// node_modules/.pnpm/micromark-util-html-tag-name@2.0.1/node_modules/micromark-util-html-tag-name/index.js
var pt = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), mt = [
	"pre",
	"script",
	"style",
	"textarea"
], ht = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: vt,
	tokenize: yt
}, gt = {
	partial: !0,
	tokenize: xt
}, _t = {
	partial: !0,
	tokenize: bt
};
function vt(e) {
	let t = e.length;
	for (; t-- && (e[t][0] !== "enter" || e[t][1].type !== "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function yt(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : ae) : T(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : T(a) ? (e.consume(a), i = 4, r.interrupt ? t : ae) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : ae) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : k : m) : n(i);
	}
	function h(t) {
		return T(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || M(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && mt.includes(l) ? (i = 1, r.interrupt ? t(s) : k(s)) : pt.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : k(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || E(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : k) : n(i);
	}
	function v(t) {
		return N(t) ? (e.consume(t), v) : D(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), D) : t === 58 || t === 95 || T(t) ? (e.consume(t), b) : N(t) ? (e.consume(t), y) : D(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || E(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), ee) : N(t) ? (e.consume(t), x) : y(t);
	}
	function ee(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, S) : N(t) ? (e.consume(t), ee) : C(t);
	}
	function S(t) {
		return t === c ? (e.consume(t), c = null, w) : t === null || j(t) ? n(t) : (e.consume(t), S);
	}
	function C(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || M(t) ? x(t) : (e.consume(t), C);
	}
	function w(e) {
		return e === 47 || e === 62 || N(e) ? y(e) : n(e);
	}
	function D(t) {
		return t === 62 ? (e.consume(t), O) : n(t);
	}
	function O(t) {
		return t === null || j(t) ? k(t) : N(t) ? (e.consume(t), O) : n(t);
	}
	function k(t) {
		return t === 45 && i === 2 ? (e.consume(t), P) : t === 60 && i === 1 ? (e.consume(t), F) : t === 62 && i === 4 ? (e.consume(t), oe) : t === 63 && i === 3 ? (e.consume(t), ae) : t === 93 && i === 5 ? (e.consume(t), ie) : j(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(gt, se, A)(t)) : t === null || j(t) ? (e.exit("htmlFlowData"), A(t)) : (e.consume(t), k);
	}
	function A(t) {
		return e.check(_t, te, se)(t);
	}
	function te(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), ne;
	}
	function ne(t) {
		return t === null || j(t) ? A(t) : (e.enter("htmlFlowData"), k(t));
	}
	function P(t) {
		return t === 45 ? (e.consume(t), ae) : k(t);
	}
	function F(t) {
		return t === 47 ? (e.consume(t), o = "", re) : k(t);
	}
	function re(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return mt.includes(n) ? (e.consume(t), oe) : k(t);
		}
		return T(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), re) : k(t);
	}
	function ie(t) {
		return t === 93 ? (e.consume(t), ae) : k(t);
	}
	function ae(t) {
		return t === 62 ? (e.consume(t), oe) : t === 45 && i === 2 ? (e.consume(t), ae) : k(t);
	}
	function oe(t) {
		return t === null || j(t) ? (e.exit("htmlFlowData"), se(t)) : (e.consume(t), oe);
	}
	function se(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function bt(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return j(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function xt(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(Ce, t, n);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/html-text.js
var St = {
	name: "htmlText",
	tokenize: Ct
};
function Ct(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : T(t) ? (e.consume(t), C) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : T(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : j(t) ? (o = d, F(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? P(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : j(t) ? (o = h, F(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? P(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? P(t) : j(t) ? (o = v, F(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : j(t) ? (o = y, F(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? P(e) : y(e);
	}
	function x(t) {
		return T(t) ? (e.consume(t), ee) : n(t);
	}
	function ee(t) {
		return t === 45 || E(t) ? (e.consume(t), ee) : S(t);
	}
	function S(t) {
		return j(t) ? (o = S, F(t)) : N(t) ? (e.consume(t), S) : P(t);
	}
	function C(t) {
		return t === 45 || E(t) ? (e.consume(t), C) : t === 47 || t === 62 || M(t) ? w(t) : n(t);
	}
	function w(t) {
		return t === 47 ? (e.consume(t), P) : t === 58 || t === 95 || T(t) ? (e.consume(t), D) : j(t) ? (o = w, F(t)) : N(t) ? (e.consume(t), w) : P(t);
	}
	function D(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || E(t) ? (e.consume(t), D) : O(t);
	}
	function O(t) {
		return t === 61 ? (e.consume(t), k) : j(t) ? (o = O, F(t)) : N(t) ? (e.consume(t), O) : w(t);
	}
	function k(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, A) : j(t) ? (o = k, F(t)) : N(t) ? (e.consume(t), k) : (e.consume(t), te);
	}
	function A(t) {
		return t === i ? (e.consume(t), i = void 0, ne) : t === null ? n(t) : j(t) ? (o = A, F(t)) : (e.consume(t), A);
	}
	function te(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || M(t) ? w(t) : (e.consume(t), te);
	}
	function ne(e) {
		return e === 47 || e === 62 || M(e) ? w(e) : n(e);
	}
	function P(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function F(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), re;
	}
	function re(t) {
		return N(t) ? I(e, ie, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : ie(t);
	}
	function ie(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/label-end.js
var wt = {
	name: "labelEnd",
	resolveAll: Ot,
	resolveTo: kt,
	tokenize: At
}, Tt = { tokenize: jt }, Et = { tokenize: Mt }, Dt = { tokenize: Nt };
function Ot(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && m(e, 0, e.length, n), e;
}
function kt(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = h(s, e.slice(a + 1, a + r + 3)), s = h(s, [[
		"enter",
		u,
		t
	]]), s = h(s, ge(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = h(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = h(s, e.slice(o + 1)), s = h(s, [[
		"exit",
		c,
		t
	]]), m(e, a, e.length, s), e;
}
function At(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(w(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(Tt, u, o ? u : d)(t) : t === 91 ? e.attempt(Et, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(Dt, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function jt(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return M(t) ? rt(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : et(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return M(t) ? rt(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? nt(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return M(t) ? rt(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function Mt(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return tt.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(w(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function Nt(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/label-start-image.js
var Pt = {
	name: "labelStartImage",
	resolveAll: wt.resolveAll,
	tokenize: Ft
};
function Ft(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/label-start-link.js
var It = {
	name: "labelStartLink",
	resolveAll: wt.resolveAll,
	tokenize: Lt
};
function Lt(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/line-ending.js
var Rt = {
	name: "lineEnding",
	tokenize: zt
};
function zt(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), I(e, t, "linePrefix");
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/thematic-break.js
var Bt = {
	name: "thematicBreak",
	tokenize: Vt
};
function Vt(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || j(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), N(t) ? I(e, s, "whitespace")(t) : s(t));
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/list.js
var L = {
	continuation: { tokenize: Gt },
	exit: qt,
	name: "list",
	tokenize: Wt
}, Ht = {
	partial: !0,
	tokenize: Jt
}, Ut = {
	partial: !0,
	tokenize: Kt
};
function Wt(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : k(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(Bt, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return k(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(Ce, r.interrupt ? n : u, e.attempt(Ht, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return N(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function Gt(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(Ce, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, I(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !N(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Ut, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, I(e, e.attempt(L, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function Kt(e, t, n) {
	let r = this;
	return I(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function qt(e) {
	e.exit(this.containerState.type);
}
function Jt(e, t, n) {
	let r = this;
	return I(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !N(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
// node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/setext-underline.js
var Yt = {
	name: "setextUnderline",
	resolveTo: Xt,
	tokenize: Zt
};
function Xt(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function Zt(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), N(t) ? I(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || j(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
// node_modules/.pnpm/micromark@4.0.2_supports-color@10.2.2/node_modules/micromark/lib/initialize/flow.js
var Qt = { tokenize: $t };
function $t(e) {
	let t = this, n = e.attempt(Ce, r, e.attempt(this.parser.constructs.flowInitial, i, I(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Ye, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) e.consume(r);
		else return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) e.consume(r);
		else return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
// node_modules/.pnpm/micromark@4.0.2_supports-color@10.2.2/node_modules/micromark/lib/initialize/text.js
var en = { resolveAll: an() }, tn = rn("string"), nn = rn("text");
function rn(e) {
	return {
		resolveAll: an(e === "text" ? on : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) t.consume(e);
			else return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function an(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : t[r] && t[r][1].type === "data" || (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function on(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
// node_modules/.pnpm/micromark@4.0.2_supports-color@10.2.2/node_modules/micromark/lib/constructs.js
var sn = /* @__PURE__ */ c({
	attentionMarkers: () => hn,
	contentInitial: () => ln,
	disable: () => gn,
	document: () => cn,
	flow: () => dn,
	flowInitial: () => un,
	insideSpan: () => mn,
	string: () => fn,
	text: () => pn
}), cn = {
	42: L,
	43: L,
	45: L,
	48: L,
	49: L,
	50: L,
	51: L,
	52: L,
	53: L,
	54: L,
	55: L,
	56: L,
	57: L,
	62: Te
}, ln = { 91: it }, un = {
	[-2]: Le,
	[-1]: Le,
	32: Le
}, dn = {
	35: ut,
	42: Bt,
	45: [Yt, Bt],
	60: ht,
	61: Yt,
	95: Bt,
	96: Pe,
	126: Pe
}, fn = {
	38: je,
	92: ke
}, pn = {
	[-5]: Rt,
	[-4]: Rt,
	[-3]: Rt,
	33: Pt,
	38: je,
	42: _e,
	60: [xe, St],
	91: It,
	92: [ct, ke],
	93: wt,
	95: _e,
	96: Ve
}, mn = { null: [_e, en] }, hn = { null: [42, 95] }, gn = { null: [] };
// node_modules/.pnpm/micromark@4.0.2_supports-color@10.2.2/node_modules/micromark/lib/create-tokenizer.js
function _n(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: w(S),
		check: w(C),
		consume: b,
		enter: x,
		exit: ee,
		interrupt: w(C, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: _,
		events: [],
		now: g,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = h(o, e), v(), o[o.length - 1] === null ? (T(t, 0), l.events = ge(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return yn(p(e), t);
	}
	function p(e) {
		return vn(o, e);
	}
	function g() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function _(e) {
		i[e.line] = e.column, D();
	}
	function v() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) y(t.charCodeAt(r._bufferIndex));
			else y(t);
		}
	}
	function y(e) {
		u = u(e);
	}
	function b(e) {
		j(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, D()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function x(e, t) {
		let n = t || {};
		return n.type = e, n.start = g(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function ee(e) {
		let t = s.pop();
		return t.end = g(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function S(e, t) {
		T(e, t.from);
	}
	function C(e, t) {
		t.restore();
	}
	function w(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = E(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function T(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && m(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function E() {
		let e = g(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, D();
		}
	}
	function D() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function vn(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function yn(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
// node_modules/.pnpm/micromark@4.0.2_supports-color@10.2.2/node_modules/micromark/lib/parse.js
function bn(e) {
	let t = {
		constructs: _([sn, ...(e || {}).extensions || []]),
		content: n(le),
		defined: [],
		document: n(de),
		flow: n(Qt),
		lazy: {},
		string: n(tn),
		text: n(nn)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return _n(t, e, n);
		}
	}
}
// node_modules/.pnpm/micromark@4.0.2_supports-color@10.2.2/node_modules/micromark/lib/postprocess.js
function xn(e) {
	for (; !qe(e););
	return e;
}
// node_modules/.pnpm/micromark@4.0.2_supports-color@10.2.2/node_modules/micromark/lib/preprocess.js
var Sn = /[\0\t\n\r]/g;
function Cn() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (Sn.lastIndex = u, c = Sn.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
// node_modules/.pnpm/micromark@4.0.2_supports-color@10.2.2/node_modules/micromark/index.js
function wn(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), ce(n)(xn(bn(n).document().write(Cn()(e, t, !0))));
}
// node_modules/.pnpm/micromark-extension-gfm-autolink-literal@2.1.0/node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var Tn = {
	tokenize: Rn,
	partial: !0
}, En = {
	tokenize: zn,
	partial: !0
}, Dn = {
	tokenize: Bn,
	partial: !0
}, On = {
	tokenize: Vn,
	partial: !0
}, kn = {
	tokenize: Hn,
	partial: !0
}, An = {
	name: "wwwAutolink",
	tokenize: In,
	previous: Un
}, jn = {
	name: "protocolAutolink",
	tokenize: Ln,
	previous: Wn
}, Mn = {
	name: "emailAutolink",
	tokenize: Fn,
	previous: Gn
}, R = {};
function Nn() {
	return { text: R };
}
for (var Pn = 48; Pn < 123;) R[Pn] = Mn, Pn++, Pn === 58 ? Pn = 65 : Pn === 91 && (Pn = 97);
R[43] = Mn, R[45] = Mn, R[46] = Mn, R[95] = Mn, R[72] = [Mn, jn], R[104] = [Mn, jn], R[87] = [Mn, An], R[119] = [Mn, An];
function Fn(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !Kn(t) || !Gn.call(r, r.previous) || qn(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t));
	}
	function s(t) {
		return Kn(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
	}
	function c(t) {
		return t === 46 ? e.check(kn, u, l)(t) : t === 45 || t === 95 || E(t) ? (a = !0, e.consume(t), c) : u(t);
	}
	function l(t) {
		return e.consume(t), i = !0, c;
	}
	function u(o) {
		return a && i && T(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function In(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !Un.call(r, r.previous) || qn(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Tn, e.attempt(En, e.attempt(Dn, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function Ln(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && Wn.call(r, r.previous) && !qn(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), s) : n(t);
	}
	function s(t) {
		if (T(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), s;
		if (t === 58) {
			let n = i.toLowerCase();
			if (n === "http" || n === "https") return e.consume(t), c;
		}
		return n(t);
	}
	function c(t) {
		return t === 47 ? (e.consume(t), a ? l : (a = !0, c)) : n(t);
	}
	function l(t) {
		return t === null || O(t) || M(t) || P(t) || ne(t) ? n(t) : e.attempt(En, e.attempt(Dn, u), n)(t);
	}
	function u(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function Rn(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function zn(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(On, c, s)(t) : t === null || M(t) || P(t) || t !== 45 && ne(t) ? c(t) : (a = !0, e.consume(t), o);
	}
	function s(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function c(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function Bn(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(On, t, a)(o) : o === null || M(o) || P(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function Vn(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || M(o) || P(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || M(e) || P(e) ? t(e) : r(e);
	}
	function a(e) {
		return T(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : T(t) ? (e.consume(t), o) : n(t);
	}
}
function Hn(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return E(e) ? n(e) : t(e);
	}
}
function Un(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || M(e);
}
function Wn(e) {
	return !T(e);
}
function Gn(e) {
	return !(e === 47 || Kn(e));
}
function Kn(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || E(e);
}
function qn(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
// node_modules/.pnpm/micromark-extension-gfm-autolink-literal@2.1.0/node_modules/micromark-extension-gfm-autolink-literal/lib/html.js
function Jn() {
	return { exit: {
		literalAutolinkEmail: Xn,
		literalAutolinkHttp: Zn,
		literalAutolinkWww: Yn
	} };
}
function Yn(e) {
	Qn.call(this, e, "http://");
}
function Xn(e) {
	Qn.call(this, e, "mailto:");
}
function Zn(e) {
	Qn.call(this, e);
}
function Qn(e, t) {
	let n = this.sliceSerialize(e);
	this.tag("<a href=\"" + re((t || "") + n) + "\">"), this.raw(this.encode(n)), this.tag("</a>");
}
// node_modules/.pnpm/micromark-extension-gfm-footnote@2.1.0/node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var $n = {
	tokenize: sr,
	partial: !0
};
function er() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: ir,
			continuation: { tokenize: ar },
			exit: or
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: rr
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: tr,
				resolveTo: nr
			}
		}
	};
}
function tr(e, t, n) {
	let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
	for (; i--;) {
		let e = r.events[i][1];
		if (e.type === "labelImage") {
			o = e;
			break;
		}
		if (e.type === "gfmFootnoteCall" || e.type === "labelLink" || e.type === "label" || e.type === "image" || e.type === "link") break;
	}
	return s;
	function s(i) {
		if (!o || !o._balanced) return n(i);
		let s = w(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function nr(e, t) {
	let n = e.length;
	for (; n--;) if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let a = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, a.start),
		end: Object.assign({}, a.end)
	}, s = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			a,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...s), e;
}
function rr(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
	return s;
	function s(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c;
	}
	function c(t) {
		return t === 94 ? (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l) : n(t);
	}
	function l(s) {
		if (a > 999 || s === 93 && !o || s === null || s === 91 || M(s)) return n(s);
		if (s === 93) {
			e.exit("chunkString");
			let a = e.exit("gfmFootnoteCallString");
			return i.includes(w(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s);
		}
		return M(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l;
	}
	function u(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
	}
}
function ir(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
	return c;
	function c(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
	}
	function l(t) {
		return t === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(t) {
		if (o > 999 || t === 93 && !s || t === null || t === 91 || M(t)) return n(t);
		if (t === 93) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return a = w(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return M(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u;
	}
	function d(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t);
	}
	function f(t) {
		return t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(a) || i.push(a), I(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function ar(e, t, n) {
	return e.check(Ce, t, e.attempt($n, t, n));
}
function or(e) {
	e.exit("gfmFootnoteDefinition");
}
function sr(e, t, n) {
	let r = this;
	return I(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
// node_modules/.pnpm/micromark-extension-gfm-footnote@2.1.0/node_modules/micromark-extension-gfm-footnote/lib/html.js
var cr = {}.hasOwnProperty, lr = {};
function ur(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function dr(e) {
	let t = e || lr, n = t.label || "Footnotes", r = t.labelTagName || "h2", i = t.labelAttributes === null || t.labelAttributes === void 0 ? "class=\"sr-only\"" : t.labelAttributes, a = t.backLabel || ur, o = t.clobberPrefix === null || t.clobberPrefix === void 0 ? "user-content-" : t.clobberPrefix;
	return {
		enter: {
			gfmFootnoteDefinition() {
				this.getData("tightStack").push(!1);
			},
			gfmFootnoteDefinitionLabelString() {
				this.buffer();
			},
			gfmFootnoteCallString() {
				this.buffer();
			}
		},
		exit: {
			gfmFootnoteDefinition() {
				let e = this.getData("gfmFootnoteDefinitions"), t = this.getData("gfmFootnoteDefinitionStack"), n = this.getData("tightStack"), r = t.pop(), i = this.resume();
				e || this.setData("gfmFootnoteDefinitions", e = {}), cr.call(e, r) || (e[r] = i), n.pop(), this.setData("slurpOneLineEnding", !0), this.setData("lastWasTag");
			},
			gfmFootnoteDefinitionLabelString(e) {
				let t = this.getData("gfmFootnoteDefinitionStack");
				t || this.setData("gfmFootnoteDefinitionStack", t = []), t.push(w(this.sliceSerialize(e))), this.resume(), this.buffer();
			},
			gfmFootnoteCallString(e) {
				let t = this.getData("gfmFootnoteCallOrder"), n = this.getData("gfmFootnoteCallCounts"), r = w(this.sliceSerialize(e)), i;
				this.resume(), t || this.setData("gfmFootnoteCallOrder", t = []), n || this.setData("gfmFootnoteCallCounts", n = {});
				let a = t.indexOf(r), s = re(r.toLowerCase());
				a === -1 ? (t.push(r), n[r] = 1, i = t.length) : (n[r]++, i = a + 1);
				let c = n[r];
				this.tag("<sup><a href=\"#" + o + "fn-" + s + "\" id=\"" + o + "fnref-" + s + (c > 1 ? "-" + c : "") + "\" data-footnote-ref=\"\" aria-describedby=\"footnote-label\">" + String(i) + "</a></sup>");
			},
			null() {
				let e = this.getData("gfmFootnoteCallOrder") || [], t = this.getData("gfmFootnoteCallCounts") || {}, s = this.getData("gfmFootnoteDefinitions") || {}, c = -1;
				for (e.length > 0 && (this.lineEndingIfNeeded(), this.tag("<section data-footnotes=\"\" class=\"footnotes\"><" + r + " id=\"footnote-label\"" + (i ? " " + i : "") + ">"), this.raw(this.encode(n)), this.tag("</" + r + ">"), this.lineEndingIfNeeded(), this.tag("<ol>")); ++c < e.length;) {
					let n = e[c], r = re(n.toLowerCase()), i = 0, l = [];
					for (; ++i <= t[n];) l.push("<a href=\"#" + o + "fnref-" + r + (i > 1 ? "-" + i : "") + "\" data-footnote-backref=\"\" aria-label=\"" + this.encode(typeof a == "string" ? a : a(c, i)) + "\" class=\"data-footnote-backref\">↩" + (i > 1 ? "<sup>" + i + "</sup>" : "") + "</a>");
					let u = l.join(" "), d = !1;
					this.lineEndingIfNeeded(), this.tag("<li id=\"" + o + "fn-" + r + "\">"), this.lineEndingIfNeeded(), this.tag(s[n].replace(/<\/p>(?:\r?\n|\r)?$/, function(e) {
						return d = !0, " " + u + e;
					})), d || (this.lineEndingIfNeeded(), this.tag(u)), this.lineEndingIfNeeded(), this.tag("</li>");
				}
				e.length > 0 && (this.lineEndingIfNeeded(), this.tag("</ol>"), this.lineEndingIfNeeded(), this.tag("</section>"));
			}
		}
	};
}
// node_modules/.pnpm/micromark-extension-gfm-strikethrough@2.1.0/node_modules/micromark-extension-gfm-strikethrough/lib/html.js
function fr() {
	return {
		enter: { strikethrough() {
			this.tag("<del>");
		} },
		exit: { strikethrough() {
			this.tag("</del>");
		} }
	};
}
// node_modules/.pnpm/micromark-extension-gfm-strikethrough@2.1.0/node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function pr(e) {
	let t = (e || {}).singleTilde, n = {
		name: "strikethrough",
		tokenize: i,
		resolveAll: r
	};
	return t ??= !0, {
		text: { 126: n },
		insideSpan: { null: [n] },
		attentionMarkers: { null: [126] }
	};
	function r(e, t) {
		let n = -1;
		for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "strikethroughSequenceTemporary" && e[n][1]._close) {
			let r = n;
			for (; r--;) if (e[r][0] === "exit" && e[r][1].type === "strikethroughSequenceTemporary" && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
				e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
				let i = {
					type: "strikethrough",
					start: Object.assign({}, e[r][1].start),
					end: Object.assign({}, e[n][1].end)
				}, a = {
					type: "strikethroughText",
					start: Object.assign({}, e[r][1].end),
					end: Object.assign({}, e[n][1].start)
				}, o = [
					[
						"enter",
						i,
						t
					],
					[
						"enter",
						e[r][1],
						t
					],
					[
						"exit",
						e[r][1],
						t
					],
					[
						"enter",
						a,
						t
					]
				], s = t.parser.constructs.insideSpan.null;
				s && m(o, o.length, 0, ge(s, e.slice(r + 1, n), t)), m(o, o.length, 0, [
					[
						"exit",
						a,
						t
					],
					[
						"enter",
						e[n][1],
						t
					],
					[
						"exit",
						e[n][1],
						t
					],
					[
						"exit",
						i,
						t
					]
				]), m(e, r - 1, n - r + 3, o), n = r + o.length - 2;
				break;
			}
		}
		for (n = -1; ++n < e.length;) e[n][1].type === "strikethroughSequenceTemporary" && (e[n][1].type = "data");
		return e;
	}
	function i(e, n, r) {
		let i = this.previous, a = this.events, o = 0;
		return s;
		function s(t) {
			return i === 126 && a[a.length - 1][1].type !== "characterEscape" ? r(t) : (e.enter("strikethroughSequenceTemporary"), c(t));
		}
		function c(a) {
			let s = he(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
			if (o < 2 && !t) return r(a);
			let l = e.exit("strikethroughSequenceTemporary"), u = he(a);
			return l._open = !u || u === 2 && !!s, l._close = !s || s === 2 && !!u, n(a);
		}
	}
}
// node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/html.js
var mr = {
	none: "",
	left: " align=\"left\"",
	right: " align=\"right\"",
	center: " align=\"center\""
};
function hr() {
	return {
		enter: {
			table(e) {
				let t = e._align;
				this.lineEndingIfNeeded(), this.tag("<table>"), this.setData("tableAlign", t);
			},
			tableBody() {
				this.tag("<tbody>");
			},
			tableData() {
				let e = mr[this.getData("tableAlign")[this.getData("tableColumn")]];
				e === void 0 ? this.buffer() : (this.lineEndingIfNeeded(), this.tag("<td" + e + ">"));
			},
			tableHead() {
				this.lineEndingIfNeeded(), this.tag("<thead>");
			},
			tableHeader() {
				let e = mr[this.getData("tableAlign")[this.getData("tableColumn")]];
				this.lineEndingIfNeeded(), this.tag("<th" + e + ">");
			},
			tableRow() {
				this.setData("tableColumn", 0), this.lineEndingIfNeeded(), this.tag("<tr>");
			}
		},
		exit: {
			codeTextData(e) {
				let t = this.sliceSerialize(e);
				this.getData("tableAlign") && (t = t.replace(/\\([\\|])/g, gr)), this.raw(this.encode(t));
			},
			table() {
				this.setData("tableAlign"), this.setData("slurpAllLineEndings"), this.lineEndingIfNeeded(), this.tag("</table>");
			},
			tableBody() {
				this.lineEndingIfNeeded(), this.tag("</tbody>");
			},
			tableData() {
				let e = this.getData("tableAlign"), t = this.getData("tableColumn");
				t in e ? (this.tag("</td>"), this.setData("tableColumn", t + 1)) : this.resume();
			},
			tableHead() {
				this.lineEndingIfNeeded(), this.tag("</thead>");
			},
			tableHeader() {
				let e = this.getData("tableColumn");
				this.tag("</th>"), this.setData("tableColumn", e + 1);
			},
			tableRow() {
				let e = this.getData("tableAlign"), t = this.getData("tableColumn");
				for (; t < e.length;) this.lineEndingIfNeeded(), this.tag("<td" + mr[e[t]] + "></td>"), t++;
				this.setData("tableColumn", t), this.lineEndingIfNeeded(), this.tag("</tr>");
			}
		}
	};
}
function gr(e, t) {
	return t === "|" ? t : e;
}
// node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/edit-map.js
var _r = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		vr(this, e, t, n);
	}
	consume(e) {
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function vr(e, t, n, r) {
	let i = 0;
	/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
	if (n !== 0 || r.length !== 0) {
		for (; i < e.map.length;) {
			if (e.map[i][0] === t) {
				e.map[i][1] += n, e.map[i][2].push(...r);
				return;
			}
			i += 1;
		}
		e.map.push([
			t,
			n,
			r
		]);
	}
}
// node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/infer.js
function yr(e, t) {
	let n = !1, r = [];
	for (; t < e.length;) {
		let i = e[t];
		if (n) {
			if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			else if (i[1].type === "tableContent") {
				if (e[t - 1][1].type === "tableDelimiterMarker") {
					let e = r.length - 1;
					r[e] = r[e] === "left" ? "center" : "right";
				}
			} else if (i[1].type === "tableDelimiterRow") break;
		} else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
		t += 1;
	}
	return r;
}
// node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/syntax.js
function br() {
	return { flow: { null: {
		name: "table",
		tokenize: xr,
		resolveAll: Sr
	} } };
}
function xr(e, t, n) {
	let r = this, i = 0, a = 0, o;
	return s;
	function s(e) {
		let t = r.events.length - 1;
		for (; t > -1;) {
			let e = r.events[t][1].type;
			if (e === "lineEnding" || e === "linePrefix") t--;
			else break;
		}
		let i = t > -1 ? r.events[t][1].type : null, a = i === "tableHead" || i === "tableRow" ? ee : c;
		return a === ee && r.parser.lazy[r.now().line] ? n(e) : a(e);
	}
	function c(t) {
		return e.enter("tableHead"), e.enter("tableRow"), l(t);
	}
	function l(e) {
		return e === 124 || (o = !0, a += 1), u(e);
	}
	function u(t) {
		return t === null ? n(t) : j(t) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : N(t) ? I(e, u, "whitespace")(t) : (a += 1, o && (o = !1, i += 1), t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, u) : (e.enter("data"), d(t)));
	}
	function d(t) {
		return t === null || t === 124 || M(t) ? (e.exit("data"), u(t)) : (e.consume(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 92 || t === 124 ? (e.consume(t), d) : d(t);
	}
	function p(t) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(t) : (e.enter("tableDelimiterRow"), o = !1, N(t) ? I(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : m(t));
	}
	function m(t) {
		return t === 45 || t === 58 ? g(t) : t === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : x(t);
	}
	function h(t) {
		return N(t) ? I(e, g, "whitespace")(t) : g(t);
	}
	function g(t) {
		return t === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), _) : t === 45 ? (a += 1, _(t)) : t === null || j(t) ? b(t) : x(t);
	}
	function _(t) {
		return t === 45 ? (e.enter("tableDelimiterFiller"), v(t)) : x(t);
	}
	function v(t) {
		return t === 45 ? (e.consume(t), v) : t === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(t));
	}
	function y(t) {
		return N(t) ? I(e, b, "whitespace")(t) : b(t);
	}
	function b(n) {
		return n === 124 ? m(n) : n === null || j(n) ? !o || i !== a ? x(n) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : x(n);
	}
	function x(e) {
		return n(e);
	}
	function ee(t) {
		return e.enter("tableRow"), S(t);
	}
	function S(n) {
		return n === 124 ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), S) : n === null || j(n) ? (e.exit("tableRow"), t(n)) : N(n) ? I(e, S, "whitespace")(n) : (e.enter("data"), C(n));
	}
	function C(t) {
		return t === null || t === 124 || M(t) ? (e.exit("data"), S(t)) : (e.consume(t), t === 92 ? w : C);
	}
	function w(t) {
		return t === 92 || t === 124 ? (e.consume(t), C) : C(t);
	}
}
function Sr(e, t) {
	let n = -1, r = !0, i = 0, a = [
		0,
		0,
		0,
		0
	], o = [
		0,
		0,
		0,
		0
	], s = !1, c = 0, l, u, d, f = new _r();
	for (; ++n < e.length;) {
		let p = e[n], m = p[1];
		p[0] === "enter" ? m.type === "tableHead" ? (s = !1, c !== 0 && (wr(f, t, c, l, u), u = void 0, c = 0), l = {
			type: "table",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			l,
			t
		]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, d = void 0, a = [
			0,
			0,
			0,
			0
		], o = [
			0,
			n + 1,
			0,
			0
		], s && (s = !1, u = {
			type: "tableBody",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			u,
			t
		]])), i = m.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], d = Cr(f, t, a, i, void 0, d), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], d = Cr(f, t, a, i, void 0, d)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : m.type === "tableHead" ? (s = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, a[1] === 0 ? o[1] !== 0 && (d = Cr(f, t, o, i, n, d)) : (o[0] = o[1], d = Cr(f, t, a, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (c !== 0 && wr(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = yr(t.events, n));
	}
	return e;
}
function Cr(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, Tr(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let s = Tr(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, s),
		end: Object.assign({}, s)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = Tr(t.events, n[2]), a = Tr(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, a)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), r !== 2) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return i !== void 0 && (a.end = Object.assign({}, Tr(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function wr(e, t, n, r, i) {
	let a = [], o = Tr(t.events, n);
	i && (i.end = Object.assign({}, o), a.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), a.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, a);
}
function Tr(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
// node_modules/.pnpm/micromark-extension-gfm-tagfilter@2.0.0/node_modules/micromark-extension-gfm-tagfilter/lib/index.js
var Er = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi, Dr = RegExp("^" + Er.source, "i");
function Or() {
	return { exit: {
		htmlFlowData(e) {
			kr.call(this, e, Er);
		},
		htmlTextData(e) {
			kr.call(this, e, Dr);
		}
	} };
}
function kr(e, t) {
	let n = this.sliceSerialize(e);
	this.options.allowDangerousHtml && (n = n.replace(t, "&lt;$1$2")), this.raw(this.encode(n));
}
// node_modules/.pnpm/micromark-extension-gfm-task-list-item@2.1.0/node_modules/micromark-extension-gfm-task-list-item/lib/html.js
function Ar() {
	return {
		enter: { taskListCheck() {
			this.tag("<input type=\"checkbox\" disabled=\"\" ");
		} },
		exit: {
			taskListCheck() {
				this.tag("/>");
			},
			taskListCheckValueChecked() {
				this.tag("checked=\"\" ");
			}
		}
	};
}
// node_modules/.pnpm/micromark-extension-gfm-task-list-item@2.1.0/node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var jr = {
	name: "tasklistCheck",
	tokenize: Nr
};
function Mr() {
	return { text: { 91: jr } };
}
function Nr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a);
	}
	function a(t) {
		return M(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : t === 88 || t === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t);
	}
	function o(t) {
		return t === 93 ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(t);
	}
	function s(r) {
		return j(r) ? t(r) : N(r) ? e.check({ tokenize: Pr }, t, n)(r) : n(r);
	}
}
function Pr(e, t, n) {
	return I(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
// node_modules/.pnpm/micromark-extension-gfm@3.0.0/node_modules/micromark-extension-gfm/index.js
function Fr(e) {
	return _([
		Nn(),
		er(),
		pr(e),
		br(),
		Mr()
	]);
}
function Ir(e) {
	return b([
		Jn(),
		dr(e),
		fr(),
		hr(),
		Or(),
		Ar()
	]);
}
// src/libs/comment-rich.mjs
var Lr = /* @__PURE__ */ c({
	EMOJI_COUNT_LIMIT: () => 12,
	EMOJI_IMAGE_LIMIT: () => zr,
	STICKER_LIMIT: () => Rr,
	bodyHTML: () => qr,
	compressSticker: () => Xr,
	createComposer: () => Zr,
	inlineBody: () => Kr,
	installStyles: () => Yr,
	packBody: () => Gr,
	renderBody: () => Jr,
	splitBody: () => Wr,
	validSticker: () => Hr
}), Rr = 1048576, zr = 262144, Br = /(?:^|\n)\[roy-sticker:(data:image\/(?:webp|png);base64,[A-Za-z0-9+/]+={0,2})\]$/, Vr = /\[roy-emoji:(data:image\/(?:webp|png);base64,[A-Za-z0-9+/]+={0,2})\]/g;
function Hr(e) {
	if (typeof e != "string" || e.length > 262144 || !/^data:image\/(?:webp|png);base64,[A-Za-z0-9+/]+={0,2}$/.test(e)) return !1;
	try {
		let t = atob(e.slice(e.indexOf(",") + 1));
		return e.startsWith("data:image/png;") ? t.slice(0, 8) === "PNG\r\n\n" : t.length >= 12 && t.slice(0, 4) === "RIFF" && t.slice(8, 12) === "WEBP";
	} catch {
		return !1;
	}
}
var Ur = (e) => String(e).replace(/[&<>"']/g, (e) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
})[e]);
function Wr(e) {
	let t = String(e ?? ""), n = t.match(Br);
	return n && Hr(n[1]) ? {
		text: t.slice(0, n.index),
		sticker: n[1]
	} : {
		text: t,
		sticker: ""
	};
}
function Gr(e, t = "", n = 2e3) {
	if (e = String(e).trim(), e.length > n || !e && !t || t && !Hr(t)) throw Error("内容或贴纸格式无效");
	return e + (t ? (e ? "\n" : "") + "[roy-sticker:" + t + "]" : "");
}
function Kr(e, t = 2e3) {
	let n = String(e).trim();
	if (n.includes("￼")) throw Error("浏览器未提供表情图片，请使用 Safari 或复制后粘贴重试。");
	let r = 0, i = 0, a = n.replace(Vr, (e, t) => {
		if (!Hr(t)) throw Error("表情格式无效");
		return r++, i += t.length, "￼";
	});
	if (!a || a.length > t || r > 12 || i > 1048576 || a.includes("[roy-emoji:") || a.includes("[roy-sticker:")) throw Error("内容过长或表情过多，请减少后再发送。");
	return n;
}
function qr(e, { markdown: t = !0 } = {}) {
	let n = (e) => "<img class=\"roy-comment-emoji\" src=\"" + e + "\" alt=\"拟我表情\" width=\"16\" height=\"16\" decoding=\"async\">", { text: r, sticker: i } = Wr(e), a = [];
	if (!t) {
		let e = 0;
		return "<p>" + Ur(r).replace(Vr, (t, r) => Hr(r) && e++ < 12 ? n(r) : t).replace(/\n/g, "<br>") + "</p>" + (i ? n(i) : "");
	}
	r = r.replace(Vr, (e, t) => {
		if (!Hr(t) || a.length >= 12) return e;
		let n = a.push(t) - 1;
		return `![roy-inline-emoji-${n}](https://roy-emoji.invalid/${n})`;
	});
	let o = r.length <= 12e3 ? wn(r, {
		allowDangerousHtml: !1,
		allowDangerousProtocol: !1,
		extensions: [Fr()],
		htmlExtensions: [Ir()]
	}) : "<p>" + Ur(r) + "</p>";
	return a.forEach((e, t) => {
		o = o.replaceAll(`<img src="https://roy-emoji.invalid/${t}" alt="roy-inline-emoji-${t}" />`, n(e));
	}), o + (i ? n(i) : "");
}
function Jr(e, t, n = {}) {
	Yr(), e.classList.add("roy-rich-body"), e.innerHTML = qr(t, n);
	for (let t of e.querySelectorAll("a")) t.rel = "nofollow ugc noopener noreferrer", t.target = "_blank";
}
function Yr() {
	if (typeof document > "u" || document.querySelector("[data-roy-rich-style]")) return;
	let e = document.createElement("link");
	e.rel = "stylesheet", e.href = "/shared/comment-rich.css?v=20261103-inline-reply-3", e.dataset.royRichStyle = "", document.head.append(e);
}
async function Xr(e) {
	let t = e, n = "";
	if (e instanceof Blob) {
		if (!e.size || e.size > 0xc00000) throw Error("表情超过 12 MB。");
		n = URL.createObjectURL(e), t = new Image(), t.src = n;
	}
	try {
		t.complete && t.naturalWidth || await new Promise((e, n) => {
			let r = setTimeout(() => {
				i(), n(Error("无法读取键盘图片，请复制表情后粘贴重试。"));
			}, 1e4), i = () => {
				clearTimeout(r), t.removeEventListener("load", a), t.removeEventListener("error", o);
			}, a = () => {
				i(), e();
			}, o = () => {
				i(), n(Error("此浏览器无法解码这个表情。"));
			};
			t.addEventListener("load", a), t.addEventListener("error", o);
		});
		let e = t.naturalWidth, n = t.naturalHeight;
		if (!e || !n || e * n > 64e6) throw Error("表情尺寸无效。");
		let r = Math.min(e, n, 512);
		for (let i of [.../* @__PURE__ */ new Set([
			r,
			Math.round(r * .9),
			Math.round(r * .8),
			Math.round(r * .7)
		])]) {
			let r = document.createElement("canvas");
			r.width = r.height = i;
			let a = r.getContext("2d");
			if (!a) throw Error("浏览器不支持表情处理。");
			a.imageSmoothingEnabled = !0, a.imageSmoothingQuality = "high", a.beginPath(), a.arc(i / 2, i / 2, i / 2, 0, Math.PI * 2), a.clip();
			let o = Math.min(e, n);
			a.drawImage(t, (e - o) / 2, (n - o) / 2, o, o, 0, 0, i, i);
			for (let e of [.98, .96]) {
				let t = r.toDataURL("image/webp", e);
				if (Hr(t) && t.length <= 262144) return t;
				if (t.startsWith("data:image/png;")) break;
			}
		}
		throw Error("表情数据过大，请减少表情数量。");
	} finally {
		n && URL.revokeObjectURL(n);
	}
}
function Zr(e, { en: t = !1, limit: n = 2e3, stickers: r = !0, markdown: i = !0 } = {}) {
	Yr();
	let a = 0, o = 0, s = !1, c = e.required, l = e.hidden, u = document.createElement("div");
	u.className = e.className + " roy-rich-editor", u.setAttribute("role", "textbox"), u.setAttribute("aria-multiline", "true"), u.setAttribute("aria-label", e.getAttribute("aria-label") || (t ? "Message" : "留言内容")), u.dataset.placeholder = e.placeholder || (t ? "Write a message…" : "写下留言…"), u.textContent = e.value, u.spellcheck = !0, e.hidden = !0, e.dataset.richSource = "", e.required = !1, e.insertAdjacentElement("afterend", u);
	let d = document.createElement("div");
	d.className = "roy-rich-compose", d.innerHTML = `<div class="roy-rich-body roy-rich-preview" data-rich-output hidden></div><p class="roy-rich-status" role="status" aria-live="polite"></p><div class="roy-rich-footer"><div class="roy-rich-meta"><span class="roy-rich-hint">${i ? "<svg class=\"roy-markdown-icon\" viewBox=\"0 0 24 18\" role=\"img\" aria-label=\"Markdown\"><title>Markdown</title><rect x=\"1\" y=\"1\" width=\"22\" height=\"16\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\"/><path d=\"M4 13V5l4 5 4-5v8m6-8v8m-3-3 3 3 3-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg>" : ""}<span>${t ? "Memoji supported" : "支持拟我表情"}</span></span><span class="roy-rich-count" data-rich-count>0 / ${n}</span></div><button type="button" class="roy-rich-preview-toggle" data-rich-preview aria-expanded="false">${t ? "Preview" : "预览"}</button></div>`;
	let f = document.createElement("div");
	f.className = "roy-rich-frame" + (i ? "" : " roy-rich-plain"), (e.parentElement?.tagName === "LABEL" ? e.parentElement : u).insertAdjacentElement("afterend", f), f.append(u, d);
	let p = d.querySelector(".roy-rich-status"), m = d.querySelector("[data-rich-output]"), h = d.querySelector("[data-rich-preview]"), g = d.querySelector("[data-rich-count]"), _ = e.closest("form,#modalReplyForm"), v = _?.querySelector("button[type=submit],[data-submit-photo-reply]"), y = null, b = null, x = null, ee = !1;
	v && (y = document.createElement("span"), y.className = "roy-rich-actions", b = document.createComment("comment-submit-position"), v.before(b), (_.matches("[data-post],[data-compose]") || v.parentElement.matches(".note-compose-actions")) && (x = v.parentElement, ee = x.hidden, x.hidden = !0), d.querySelector(".roy-rich-footer").append(y), y.append(h, v));
	let S = (e) => e.matches("img[data-roy-emoji]") && Hr(e.getAttribute("src"));
	function C(e, t = !1) {
		if (e.nodeType === 3) return e.textContent;
		if (e.nodeType !== 1) return "";
		if (e.tagName === "IMG") return S(e) ? t ? "￼" : "[roy-emoji:" + e.getAttribute("src") + "]" : "";
		if (e.hasAttribute("data-rich-pending")) return "";
		if (e.tagName === "BR") return "\n";
		let n = "";
		for (let r of e.childNodes) r.nodeType === 1 && /^(DIV|P|LI)$/.test(r.nodeName) && n && !n.endsWith("\n") && (n += "\n"), n += C(r, t);
		return /^(DIV|P|LI)$/.test(e.tagName) && e !== u && e.nextSibling && !n.endsWith("\n") && (n += "\n"), n;
	}
	function w(e = "") {
		o++, a = 0, u.replaceChildren(), A = null, p.textContent = "";
		let n = Wr(e), r = n.text + (n.sticker ? "[roy-emoji:" + n.sticker + "]" : "");
		if (!r) {
			E();
			return;
		}
		let i = 0;
		for (let e of r.matchAll(Vr)) {
			if (!Hr(e[1])) continue;
			u.append(document.createTextNode(r.slice(i, e.index)));
			let n = new Image();
			n.src = e[1], n.alt = t ? "Memoji" : "拟我表情", n.className = "roy-comment-emoji", n.dataset.royEmoji = "", n.contentEditable = "false", n.width = n.height = 16, u.append(n), i = e.index + e[0].length;
		}
		u.append(document.createTextNode(r.slice(i))), E();
	}
	let T = () => Kr(C(u), n);
	function E() {
		if (!s) {
			if (e.value = C(u, !0), g.textContent = e.value.trim().length + " / " + n, g.classList.toggle("is-over-limit", e.value.trim().length > n), C(u).includes("￼") && (p.textContent = t ? "The keyboard sent only a placeholder. Try Safari, or copy and paste the emoji." : "键盘只传来了占位符，请使用 Safari 或复制表情后粘贴。"), !m.hidden) try {
				Jr(m, T(), { markdown: i });
			} catch {
				m.textContent = e.value;
			}
			e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("roy-rich-change", { bubbles: !0 }));
		}
	}
	function D() {
		let t = e.matches(":disabled");
		u.contentEditable = String(!t), u.setAttribute("aria-disabled", String(t)), u.tabIndex = t ? -1 : 0, h.disabled = t;
	}
	let O = new MutationObserver(D);
	O.observe(e, {
		attributes: !0,
		attributeFilter: ["disabled"]
	});
	let k = e.closest("fieldset");
	k && O.observe(k, {
		attributes: !0,
		attributeFilter: ["disabled"]
	}), D();
	let A = null, te = () => {
		let e = getSelection();
		e?.rangeCount && u.contains(e.anchorNode) && (A = e.getRangeAt(0).cloneRange());
	};
	document.addEventListener("selectionchange", te);
	function j(e) {
		let t = getSelection(), n = t?.rangeCount && u.contains(t.anchorNode) ? t.getRangeAt(0).cloneRange() : A;
		return u.focus(), n && u.contains(n.commonAncestorContainer) || (n = document.createRange(), n.selectNodeContents(u), n.collapse(!1)), n.deleteContents(), n.insertNode(e), n.setStartAfter(e), n.collapse(!0), t.removeAllRanges(), t.addRange(n), A = n.cloneRange(), e;
	}
	async function M(n, i) {
		if (!r || e.matches(":disabled")) return;
		let c = o, l = i || j(Object.assign(document.createElement("span"), { textContent: "…" }));
		l.setAttribute("data-rich-pending", ""), l.contentEditable = "false", a++, p.textContent = t ? "Processing emoji…" : "正在处理表情…", E();
		try {
			let e = await Xr(n);
			if (s || c !== o || !u.contains(l)) return;
			let r = [...u.querySelectorAll("img[data-roy-emoji]")];
			if (r.length >= 12 || r.reduce((e, t) => e + t.src.length, 0) + e.length > 1048576) throw Error("表情过多，请减少后再发送。");
			let i = new Image();
			i.src = e, i.alt = t ? "Memoji" : "拟我表情", i.className = "roy-comment-emoji", i.dataset.royEmoji = "", i.contentEditable = "false", i.width = i.height = 16;
			let a = getSelection(), d = a?.rangeCount && a.isCollapsed && a.anchorNode === l.parentNode && a.anchorOffset === [...l.parentNode.childNodes].indexOf(l) + 1;
			if (l.replaceWith(i), d) {
				let e = document.createRange();
				e.setStartAfter(i), e.collapse(!0), a.removeAllRanges(), a.addRange(e), A = e.cloneRange();
			}
			p.textContent = "";
		} catch (e) {
			!s && c === o && (l.remove(), p.textContent = t ? "This emoji could not be read. Try copying it from the keyboard and pasting again." : e.message);
		} finally {
			c === o && !s && (a--, E());
		}
	}
	function N(e) {
		return [...e?.files || [], ...[...e?.items || []].filter((e) => e.kind === "file").map((e) => e.getAsFile()).filter(Boolean)].find((e) => e.type.startsWith("image/") || /\.(heic|heif|png|jpe?g|webp)$/i.test(e.name));
	}
	function ne(t) {
		if (e.matches(":disabled")) {
			t.preventDefault();
			return;
		}
		let n = t.clipboardData || t.dataTransfer, i = new DOMParser().parseFromString(n?.getData("text/html") || "", "text/html"), a = (e) => /^(data:image\/|blob:)/i.test(e.getAttribute("src") || "");
		if (r && [...i.images].some(a)) {
			t.preventDefault();
			let e = (t) => {
				if (t.nodeType === 3) j(document.createTextNode(t.textContent.replace(/\ufffc/g, "")));
				else if (t.nodeType === 1) {
					if (t.tagName === "IMG") {
						if (a(t)) {
							let e = new Image();
							e.src = t.getAttribute("src"), M(e);
						}
					} else if (!(t.tagName === "SOURCE" || /^(SCRIPT|STYLE|IFRAME|OBJECT)$/.test(t.tagName))) {
						if (t.tagName === "BR") j(document.createTextNode("\n"));
						else {
							for (let n of t.childNodes) e(n);
							/^(DIV|P)$/.test(t.tagName) && t.nextSibling && j(document.createTextNode("\n"));
						}
					}
				}
			};
			for (let t of i.body.childNodes) e(t);
			E();
			return;
		}
		let o = N(n);
		if (o && r) {
			t.preventDefault(), M(o);
			return;
		}
		let s = n?.getData("text/plain");
		s && s.replace(/\ufffc/g, "") ? (t.preventDefault(), j(document.createTextNode(s.replace(/\ufffc/g, ""))), E()) : t.type === "drop" && t.preventDefault();
	}
	u.addEventListener("paste", ne), u.addEventListener("drop", ne), u.addEventListener("beforeinput", (t) => {
		if (e.matches(":disabled")) {
			t.preventDefault();
			return;
		}
		let n = N(t.dataTransfer);
		n && r && (t.preventDefault(), M(n));
	});
	let P = () => {
		if (!s) {
			for (let e of u.querySelectorAll("img:not([data-roy-emoji]):not([data-rich-pending])")) {
				if (!r) {
					e.remove();
					continue;
				}
				let t = e.getAttribute("src") || "";
				/^(data:image\/|blob:|webkit-fake-url:)/i.test(t) ? M(e, e) : e.replaceWith(document.createTextNode(e.alt || ""));
			}
			E();
		}
	}, F = new MutationObserver(P);
	return F.observe(u, {
		childList: !0,
		subtree: !0,
		characterData: !0
	}), u.addEventListener("input", P), h.onclick = () => {
		m.hidden = !m.hidden, h.textContent = m.hidden ? t ? "Preview" : "预览" : t ? "Hide preview" : "收起预览", h.setAttribute("aria-expanded", String(!m.hidden)), E();
	}, {
		get hasSticker() {
			return !!u.querySelector("img[data-roy-emoji]");
		},
		get busy() {
			return a > 0;
		},
		focus() {
			u.focus();
		},
		draft() {
			return C(u);
		},
		setValue: w,
		value() {
			if (a) throw Error(t ? "Emoji is still processing." : "表情仍在处理中");
			return T();
		},
		clear() {
			o++, a = 0, u.replaceChildren(), A = null, p.textContent = "", m.hidden = !0, h.textContent = t ? "Preview" : "预览", h.setAttribute("aria-expanded", "false"), E();
		},
		destroy() {
			s = !0, o++, F.disconnect(), O.disconnect(), document.removeEventListener("selectionchange", te), e.hidden = l, delete e.dataset.richSource, e.required = c, b && (b.replaceWith(v), y.remove(), x && (x.hidden = ee)), u.remove(), f.remove();
		}
	};
}
// src/libs/comment-config.ts
var Qr = "https://ewjdofdzzozvzpjhcmyq.supabase.co".replace(/\/$/, ""), $r = "sb_publishable_fOXI3ujosvq2W6yU7LQRpg_zkZXR2Ss";
if (!!Qr != !!$r) throw Error("Set both public Supabase variables, or leave both empty.");
if (Qr) {
	let e = new URL(Qr);
	if (e.protocol !== "https:" && !["localhost", "127.0.0.1"].includes(e.hostname)) throw Error("Supabase must use HTTPS.");
	if ($r.startsWith("eyJ")) try {
		if (JSON.parse(atob($r.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))).role !== "anon") throw Error("Not an anon key");
	} catch {
		throw Error("Only a public anon key is allowed, never service_role.");
	}
	else if (!$r.startsWith("sb_publishable_")) throw Error("Use a Publishable key, never a Secret or Resend key.");
}
var ei = {
	url: Qr,
	key: $r,
	configured: !!(Qr && $r)
}, ti = /* @__PURE__ */ c({
	__addDisposableResource: () => Oi,
	__assign: () => Mi,
	__asyncDelegator: () => bi,
	__asyncGenerator: () => yi,
	__asyncValues: () => xi,
	__await: () => vi,
	__awaiter: () => z,
	__classPrivateFieldGet: () => Ti,
	__classPrivateFieldIn: () => Di,
	__classPrivateFieldSet: () => Ei,
	__createBinding: () => Ni,
	__decorate: () => ii,
	__disposeResources: () => ki,
	__esDecorate: () => oi,
	__exportStar: () => fi,
	__extends: () => ni,
	__generator: () => di,
	__importDefault: () => wi,
	__importStar: () => Ci,
	__makeTemplateObject: () => Si,
	__metadata: () => ui,
	__param: () => ai,
	__propKey: () => ci,
	__read: () => mi,
	__rest: () => ri,
	__rewriteRelativeImportExtension: () => Ai,
	__runInitializers: () => si,
	__setFunctionName: () => li,
	__spread: () => hi,
	__spreadArray: () => _i,
	__spreadArrays: () => gi,
	__values: () => pi,
	default: () => Li
});
function ni(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	ji(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function ri(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function ii(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
function ai(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function oi(e, t, n, r, i, a) {
	function o(e) {
		if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
		return e;
	}
	for (var s = r.kind, c = s === "getter" ? "get" : s === "setter" ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, u = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), d, f = !1, p = n.length - 1; p >= 0; p--) {
		var m = {};
		for (var h in r) m[h] = h === "access" ? {} : r[h];
		for (var h in r.access) m.access[h] = r.access[h];
		m.addInitializer = function(e) {
			if (f) throw TypeError("Cannot add initializers after decoration has completed");
			a.push(o(e || null));
		};
		var g = (0, n[p])(s === "accessor" ? {
			get: u.get,
			set: u.set
		} : u[c], m);
		if (s === "accessor") {
			if (g === void 0) continue;
			if (typeof g != "object" || !g) throw TypeError("Object expected");
			(d = o(g.get)) && (u.get = d), (d = o(g.set)) && (u.set = d), (d = o(g.init)) && i.unshift(d);
		} else (d = o(g)) && (s === "field" ? i.unshift(d) : u[c] = d);
	}
	l && Object.defineProperty(l, r.name, u), f = !0;
}
function si(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function ci(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function li(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function ui(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function z(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function di(e, t) {
	var n = {
		label: 0,
		sent: function() {
			if (a[0] & 1) throw a[1];
			return a[1];
		},
		trys: [],
		ops: []
	}, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(e) {
		return function(t) {
			return c([e, t]);
		};
	}
	function c(s) {
		if (r) throw TypeError("Generator is already executing.");
		for (; o && (o = 0, s[0] && (n = 0)), n;) try {
			if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
			switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
				case 0:
				case 1:
					a = s;
					break;
				case 4: return n.label++, {
					value: s[1],
					done: !1
				};
				case 5:
					n.label++, i = s[1], s = [0];
					continue;
				case 7:
					s = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
						n = 0;
						continue;
					}
					if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
						n.label = s[1];
						break;
					}
					if (s[0] === 6 && n.label < a[1]) {
						n.label = a[1], a = s;
						break;
					}
					if (a && n.label < a[2]) {
						n.label = a[2], n.ops.push(s);
						break;
					}
					a[2] && n.ops.pop(), n.trys.pop();
					continue;
			}
			s = t.call(e, n);
		} catch (e) {
			s = [6, e], i = 0;
		} finally {
			r = a = 0;
		}
		if (s[0] & 5) throw s[1];
		return {
			value: s[0] ? s[1] : void 0,
			done: !0
		};
	}
}
function fi(e, t) {
	for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && Ni(t, e, n);
}
function pi(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function mi(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r = n.call(e), i, a = [], o;
	try {
		for (; (t === void 0 || t-- > 0) && !(i = r.next()).done;) a.push(i.value);
	} catch (e) {
		o = { error: e };
	} finally {
		try {
			i && !i.done && (n = r.return) && n.call(r);
		} finally {
			if (o) throw o.error;
		}
	}
	return a;
}
function hi() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(mi(arguments[t]));
	return e;
}
function gi() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function _i(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
function vi(e) {
	return this instanceof vi ? (this.v = e, this) : new vi(e);
}
function yi(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r = n.apply(e, t || []), i, a = [];
	return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", o), i[Symbol.asyncIterator] = function() {
		return this;
	}, i;
	function o(e) {
		return function(t) {
			return Promise.resolve(t).then(e, d);
		};
	}
	function s(e, t) {
		r[e] && (i[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || c(e, t);
			});
		}, t && (i[e] = t(i[e])));
	}
	function c(e, t) {
		try {
			l(r[e](t));
		} catch (e) {
			f(a[0][3], e);
		}
	}
	function l(e) {
		e.value instanceof vi ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
	}
	function u(e) {
		c("next", e);
	}
	function d(e) {
		c("throw", e);
	}
	function f(e, t) {
		e(t), a.shift(), a.length && c(a[0][0], a[0][1]);
	}
}
function bi(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: vi(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function xi(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t = e[Symbol.asyncIterator], n;
	return t ? t.call(e) : (e = typeof pi == "function" ? pi(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
		return this;
	}, n);
	function r(t) {
		n[t] = e[t] && function(n) {
			return new Promise(function(r, a) {
				n = e[t](n), i(r, a, n.done, n.value);
			});
		};
	}
	function i(e, t, n, r) {
		Promise.resolve(r).then(function(t) {
			e({
				value: t,
				done: n
			});
		}, t);
	}
}
function Si(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function Ci(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = Fi(e), r = 0; r < n.length; r++) n[r] !== "default" && Ni(t, e, n[r]);
	return Pi(t, e), t;
}
function wi(e) {
	return e && e.__esModule ? e : { default: e };
}
function Ti(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Ei(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function Di(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function Oi(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		}), e.stack.push({
			value: t,
			dispose: r,
			async: n
		});
	} else n && e.stack.push({ async: !0 });
	return t;
}
function ki(e) {
	function t(t) {
		e.error = e.hasError ? new Ii(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	function i() {
		for (; n = e.stack.pop();) try {
			if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
					return t(e), i();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}
	return i();
}
function Ai(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : r && (!i || !a) ? e : r + i + "." + a.toLowerCase() + "js";
	}) : e;
}
var ji, Mi, Ni, Pi, Fi, Ii, Li, B = o((() => {
	ji = function(e, t) {
		return ji = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, ji(e, t);
	}, Mi = function() {
		return Mi = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, Mi.apply(this, arguments);
	}, Ni = Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	}), Pi = Object.create ? (function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	}) : function(e, t) {
		e.default = t;
	}, Fi = function(e) {
		return Fi = Object.getOwnPropertyNames || function(e) {
			var t = [];
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
			return t;
		}, Fi(e);
	}, Ii = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
		var r = Error(n);
		return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
	}, Li = {
		__extends: ni,
		__assign: Mi,
		__rest: ri,
		__decorate: ii,
		__param: ai,
		__esDecorate: oi,
		__runInitializers: si,
		__propKey: ci,
		__setFunctionName: li,
		__metadata: ui,
		__awaiter: z,
		__generator: di,
		__createBinding: Ni,
		__exportStar: fi,
		__values: pi,
		__read: mi,
		__spread: hi,
		__spreadArrays: gi,
		__spreadArray: _i,
		__await: vi,
		__asyncGenerator: yi,
		__asyncDelegator: bi,
		__asyncValues: xi,
		__makeTemplateObject: Si,
		__importStar: Ci,
		__importDefault: wi,
		__classPrivateFieldGet: Ti,
		__classPrivateFieldSet: Ei,
		__classPrivateFieldIn: Di,
		__addDisposableResource: Oi,
		__disposeResources: ki,
		__rewriteRelativeImportExtension: Ai
	};
})), Ri = /* @__PURE__ */ c({
	Headers: () => Ui,
	Request: () => Wi,
	Response: () => Gi,
	default: () => Hi,
	fetch: () => Vi
}), zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki = o((() => {
	zi = function() {
		if (typeof self < "u") return self;
		if (typeof window < "u") return window;
		if (typeof global < "u") return global;
		throw Error("unable to locate global object");
	}, Bi = zi(), Vi = Bi.fetch, Hi = Bi.fetch.bind(Bi), Ui = Bi.Headers, Wi = Bi.Request, Gi = Bi.Response;
})), qi, Ji = o((() => {
	qi = (e) => {
		let t;
		return t = e || (typeof fetch > "u" ? (...e) => Promise.resolve().then(() => (Ki(), Ri)).then(({ default: t }) => t(...e)) : fetch), (...e) => t(...e);
	};
})), Yi, Xi, Zi, Qi, $i, ea = o((() => {
	Yi = class extends Error {
		constructor(e, t = "FunctionsError", n) {
			super(e), this.name = t, this.context = n;
		}
	}, Xi = class extends Yi {
		constructor(e) {
			super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
		}
	}, Zi = class extends Yi {
		constructor(e) {
			super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
		}
	}, Qi = class extends Yi {
		constructor(e) {
			super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
		}
	}, (function(e) {
		e.Any = "any", e.ApNortheast1 = "ap-northeast-1", e.ApNortheast2 = "ap-northeast-2", e.ApSouth1 = "ap-south-1", e.ApSoutheast1 = "ap-southeast-1", e.ApSoutheast2 = "ap-southeast-2", e.CaCentral1 = "ca-central-1", e.EuCentral1 = "eu-central-1", e.EuWest1 = "eu-west-1", e.EuWest2 = "eu-west-2", e.EuWest3 = "eu-west-3", e.SaEast1 = "sa-east-1", e.UsEast1 = "us-east-1", e.UsWest1 = "us-west-1", e.UsWest2 = "us-west-2";
	})($i ||= {});
})), ta, na = o((() => {
	B(), Ji(), ea(), ta = class {
		constructor(e, { headers: t = {}, customFetch: n, region: r = $i.Any } = {}) {
			this.url = e, this.headers = t, this.region = r, this.fetch = qi(n);
		}
		setAuth(e) {
			this.headers.Authorization = `Bearer ${e}`;
		}
		invoke(e) {
			return z(this, arguments, void 0, function* (e, t = {}) {
				try {
					let { headers: n, method: r, body: i, signal: a } = t, o = {}, { region: s } = t;
					s ||= this.region;
					let c = new URL(`${this.url}/${e}`);
					s && s !== "any" && (o["x-region"] = s, c.searchParams.set("forceFunctionRegion", s));
					let l;
					i && (n && !Object.prototype.hasOwnProperty.call(n, "Content-Type") || !n) ? typeof Blob < "u" && i instanceof Blob || i instanceof ArrayBuffer ? (o["Content-Type"] = "application/octet-stream", l = i) : typeof i == "string" ? (o["Content-Type"] = "text/plain", l = i) : typeof FormData < "u" && i instanceof FormData ? l = i : (o["Content-Type"] = "application/json", l = JSON.stringify(i)) : l = i;
					let u = yield this.fetch(c.toString(), {
						method: r || "POST",
						headers: Object.assign(Object.assign(Object.assign({}, o), this.headers), n),
						body: l,
						signal: a
					}).catch((e) => {
						throw e.name === "AbortError" ? e : new Xi(e);
					}), d = u.headers.get("x-relay-error");
					if (d && d === "true") throw new Zi(u);
					if (!u.ok) throw new Qi(u);
					let f = (u.headers.get("Content-Type") ?? "text/plain").split(";")[0].trim(), p;
					return p = f === "application/json" ? yield u.json() : f === "application/octet-stream" || f === "application/pdf" ? yield u.blob() : f === "text/event-stream" ? u : f === "multipart/form-data" ? yield u.formData() : yield u.text(), {
						data: p,
						error: null,
						response: u
					};
				} catch (e) {
					return e instanceof Error && e.name === "AbortError" ? {
						data: null,
						error: new Xi(e)
					} : {
						data: null,
						error: e,
						response: e instanceof Qi || e instanceof Zi ? e.context : void 0
					};
				}
			});
		}
	};
})), ra = o((() => {
	na(), ea();
})), ia = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = class extends Error {
		constructor(e) {
			super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
		}
	};
})), aa = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = (B(), d(ti)), n = t.__importDefault((Ki(), d(Ri))), r = t.__importDefault(ia());
	e.default = class {
		constructor(e) {
			this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = new Headers(e.headers), this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = e.shouldThrowOnError ?? !1, this.signal = e.signal, this.isMaybeSingle = e.isMaybeSingle ?? !1, this.fetch = e.fetch ? e.fetch : typeof fetch > "u" ? n.default : fetch;
		}
		throwOnError() {
			return this.shouldThrowOnError = !0, this;
		}
		setHeader(e, t) {
			return this.headers = new Headers(this.headers), this.headers.set(e, t), this;
		}
		then(e, t) {
			this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
			let n = (0, this.fetch)(this.url.toString(), {
				method: this.method,
				headers: this.headers,
				body: JSON.stringify(this.body),
				signal: this.signal
			}).then(async (e) => {
				let t = null, n = null, i = null, a = e.status, o = e.statusText;
				if (e.ok) {
					if (this.method !== "HEAD") {
						let t = await e.text();
						t === "" || (n = this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && this.headers.get("Accept")?.includes("application/vnd.pgrst.plan+text") ? t : JSON.parse(t));
					}
					let r = this.headers.get("Prefer")?.match(/count=(exact|planned|estimated)/), s = e.headers.get("content-range")?.split("/");
					r && s && s.length > 1 && (i = parseInt(s[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(n) && (n.length > 1 ? (t = {
						code: "PGRST116",
						details: `Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,
						hint: null,
						message: "JSON object requested, multiple (or no) rows returned"
					}, n = null, i = null, a = 406, o = "Not Acceptable") : n = n.length === 1 ? n[0] : null);
				} else {
					let i = await e.text();
					try {
						t = JSON.parse(i), Array.isArray(t) && e.status === 404 && (n = [], t = null, a = 200, o = "OK");
					} catch {
						e.status === 404 && i === "" ? (a = 204, o = "No Content") : t = { message: i };
					}
					if (t && this.isMaybeSingle && (t?.details)?.includes("0 rows") && (t = null, a = 200, o = "OK"), t && this.shouldThrowOnError) throw new r.default(t);
				}
				return {
					error: t,
					data: n,
					count: i,
					status: a,
					statusText: o
				};
			});
			return this.shouldThrowOnError || (n = n.catch((e) => ({
				error: {
					message: `${e?.name ?? "FetchError"}: ${e?.message}`,
					details: `${e?.stack ?? ""}`,
					hint: "",
					code: `${e?.code ?? ""}`
				},
				data: null,
				count: null,
				status: 0,
				statusText: ""
			}))), n.then(e, t);
		}
		returns() {
			/* istanbul ignore next */
			return this;
		}
		overrideTypes() {
			return this;
		}
	};
})), oa = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = (B(), d(ti)).__importDefault(aa());
	e.default = class extends t.default {
		select(e) {
			let t = !1, n = (e ?? "*").split("").map((e) => /\s/.test(e) && !t ? "" : (e === "\"" && (t = !t), e)).join("");
			return this.url.searchParams.set("select", n), this.headers.append("Prefer", "return=representation"), this;
		}
		order(e, { ascending: t = !0, nullsFirst: n, foreignTable: r, referencedTable: i = r } = {}) {
			let a = i ? `${i}.order` : "order", o = this.url.searchParams.get(a);
			return this.url.searchParams.set(a, `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${n === void 0 ? "" : n ? ".nullsfirst" : ".nullslast"}`), this;
		}
		limit(e, { foreignTable: t, referencedTable: n = t } = {}) {
			let r = n === void 0 ? "limit" : `${n}.limit`;
			return this.url.searchParams.set(r, `${e}`), this;
		}
		range(e, t, { foreignTable: n, referencedTable: r = n } = {}) {
			let i = r === void 0 ? "offset" : `${r}.offset`, a = r === void 0 ? "limit" : `${r}.limit`;
			return this.url.searchParams.set(i, `${e}`), this.url.searchParams.set(a, `${t - e + 1}`), this;
		}
		abortSignal(e) {
			return this.signal = e, this;
		}
		single() {
			return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
		}
		maybeSingle() {
			return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"), this.isMaybeSingle = !0, this;
		}
		csv() {
			return this.headers.set("Accept", "text/csv"), this;
		}
		geojson() {
			return this.headers.set("Accept", "application/geo+json"), this;
		}
		explain({ analyze: e = !1, verbose: t = !1, settings: n = !1, buffers: r = !1, wal: i = !1, format: a = "text" } = {}) {
			let o = [
				e ? "analyze" : null,
				t ? "verbose" : null,
				n ? "settings" : null,
				r ? "buffers" : null,
				i ? "wal" : null
			].filter(Boolean).join("|"), s = this.headers.get("Accept") ?? "application/json";
			return this.headers.set("Accept", `application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`), this;
		}
		rollback() {
			return this.headers.append("Prefer", "tx=rollback"), this;
		}
		returns() {
			return this;
		}
		maxAffected(e) {
			return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${e}`), this;
		}
	};
})), sa = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = (B(), d(ti)).__importDefault(oa());
	e.default = class extends t.default {
		eq(e, t) {
			return this.url.searchParams.append(e, `eq.${t}`), this;
		}
		neq(e, t) {
			return this.url.searchParams.append(e, `neq.${t}`), this;
		}
		gt(e, t) {
			return this.url.searchParams.append(e, `gt.${t}`), this;
		}
		gte(e, t) {
			return this.url.searchParams.append(e, `gte.${t}`), this;
		}
		lt(e, t) {
			return this.url.searchParams.append(e, `lt.${t}`), this;
		}
		lte(e, t) {
			return this.url.searchParams.append(e, `lte.${t}`), this;
		}
		like(e, t) {
			return this.url.searchParams.append(e, `like.${t}`), this;
		}
		likeAllOf(e, t) {
			return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this;
		}
		likeAnyOf(e, t) {
			return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this;
		}
		ilike(e, t) {
			return this.url.searchParams.append(e, `ilike.${t}`), this;
		}
		ilikeAllOf(e, t) {
			return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this;
		}
		ilikeAnyOf(e, t) {
			return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this;
		}
		is(e, t) {
			return this.url.searchParams.append(e, `is.${t}`), this;
		}
		in(e, t) {
			let n = Array.from(new Set(t)).map((e) => typeof e == "string" && (/* @__PURE__ */ RegExp("[,()]")).test(e) ? `"${e}"` : `${e}`).join(",");
			return this.url.searchParams.append(e, `in.(${n})`), this;
		}
		contains(e, t) {
			return typeof t == "string" ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`), this;
		}
		containedBy(e, t) {
			return typeof t == "string" ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`), this;
		}
		rangeGt(e, t) {
			return this.url.searchParams.append(e, `sr.${t}`), this;
		}
		rangeGte(e, t) {
			return this.url.searchParams.append(e, `nxl.${t}`), this;
		}
		rangeLt(e, t) {
			return this.url.searchParams.append(e, `sl.${t}`), this;
		}
		rangeLte(e, t) {
			return this.url.searchParams.append(e, `nxr.${t}`), this;
		}
		rangeAdjacent(e, t) {
			return this.url.searchParams.append(e, `adj.${t}`), this;
		}
		overlaps(e, t) {
			return typeof t == "string" ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`), this;
		}
		textSearch(e, t, { config: n, type: r } = {}) {
			let i = "";
			r === "plain" ? i = "pl" : r === "phrase" ? i = "ph" : r === "websearch" && (i = "w");
			let a = n === void 0 ? "" : `(${n})`;
			return this.url.searchParams.append(e, `${i}fts${a}.${t}`), this;
		}
		match(e) {
			return Object.entries(e).forEach(([e, t]) => {
				this.url.searchParams.append(e, `eq.${t}`);
			}), this;
		}
		not(e, t, n) {
			return this.url.searchParams.append(e, `not.${t}.${n}`), this;
		}
		or(e, { foreignTable: t, referencedTable: n = t } = {}) {
			let r = n ? `${n}.or` : "or";
			return this.url.searchParams.append(r, `(${e})`), this;
		}
		filter(e, t, n) {
			return this.url.searchParams.append(e, `${t}.${n}`), this;
		}
	};
})), ca = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = (B(), d(ti)).__importDefault(sa());
	e.default = class {
		constructor(e, { headers: t = {}, schema: n, fetch: r }) {
			this.url = e, this.headers = new Headers(t), this.schema = n, this.fetch = r;
		}
		select(e, n) {
			let { head: r = !1, count: i } = n ?? {}, a = r ? "HEAD" : "GET", o = !1, s = (e ?? "*").split("").map((e) => /\s/.test(e) && !o ? "" : (e === "\"" && (o = !o), e)).join("");
			return this.url.searchParams.set("select", s), i && this.headers.append("Prefer", `count=${i}`), new t.default({
				method: a,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				fetch: this.fetch
			});
		}
		insert(e, { count: n, defaultToNull: r = !0 } = {}) {
			if (n && this.headers.append("Prefer", `count=${n}`), r || this.headers.append("Prefer", "missing=default"), Array.isArray(e)) {
				let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
				if (t.length > 0) {
					let e = [...new Set(t)].map((e) => `"${e}"`);
					this.url.searchParams.set("columns", e.join(","));
				}
			}
			return new t.default({
				method: "POST",
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				body: e,
				fetch: this.fetch ?? fetch
			});
		}
		upsert(e, { onConflict: n, ignoreDuplicates: r = !1, count: i, defaultToNull: a = !0 } = {}) {
			if (this.headers.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`), n !== void 0 && this.url.searchParams.set("on_conflict", n), i && this.headers.append("Prefer", `count=${i}`), a || this.headers.append("Prefer", "missing=default"), Array.isArray(e)) {
				let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
				if (t.length > 0) {
					let e = [...new Set(t)].map((e) => `"${e}"`);
					this.url.searchParams.set("columns", e.join(","));
				}
			}
			return new t.default({
				method: "POST",
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				body: e,
				fetch: this.fetch ?? fetch
			});
		}
		update(e, { count: n } = {}) {
			return n && this.headers.append("Prefer", `count=${n}`), new t.default({
				method: "PATCH",
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				body: e,
				fetch: this.fetch ?? fetch
			});
		}
		delete({ count: e } = {}) {
			return e && this.headers.append("Prefer", `count=${e}`), new t.default({
				method: "DELETE",
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				fetch: this.fetch ?? fetch
			});
		}
	};
})), la = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = (B(), d(ti)), n = t.__importDefault(ca()), r = t.__importDefault(sa());
	e.default = class e {
		constructor(e, { headers: t = {}, schema: n, fetch: r } = {}) {
			this.url = e, this.headers = new Headers(t), this.schemaName = n, this.fetch = r;
		}
		from(e) {
			let t = new URL(`${this.url}/${e}`);
			return new n.default(t, {
				headers: new Headers(this.headers),
				schema: this.schemaName,
				fetch: this.fetch
			});
		}
		schema(t) {
			return new e(this.url, {
				headers: this.headers,
				schema: t,
				fetch: this.fetch
			});
		}
		rpc(e, t = {}, { head: n = !1, get: i = !1, count: a } = {}) {
			let o, s = new URL(`${this.url}/rpc/${e}`), c;
			n || i ? (o = n ? "HEAD" : "GET", Object.entries(t).filter(([e, t]) => t !== void 0).map(([e, t]) => [e, Array.isArray(t) ? `{${t.join(",")}}` : `${t}`]).forEach(([e, t]) => {
				s.searchParams.append(e, t);
			})) : (o = "POST", c = t);
			let l = new Headers(this.headers);
			return a && l.set("Prefer", `count=${a}`), new r.default({
				method: o,
				url: s,
				headers: l,
				schema: this.schemaName,
				body: c,
				fetch: this.fetch ?? fetch
			});
		}
	};
})), ua = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.PostgrestError = e.PostgrestBuilder = e.PostgrestTransformBuilder = e.PostgrestFilterBuilder = e.PostgrestQueryBuilder = e.PostgrestClient = void 0;
	var t = (B(), d(ti)), n = t.__importDefault(la());
	e.PostgrestClient = n.default;
	var r = t.__importDefault(ca());
	e.PostgrestQueryBuilder = r.default;
	var i = t.__importDefault(sa());
	e.PostgrestFilterBuilder = i.default;
	var a = t.__importDefault(oa());
	e.PostgrestTransformBuilder = a.default;
	var o = t.__importDefault(aa());
	e.PostgrestBuilder = o.default;
	var s = t.__importDefault(ia());
	e.PostgrestError = s.default, e.default = {
		PostgrestClient: n.default,
		PostgrestQueryBuilder: r.default,
		PostgrestFilterBuilder: i.default,
		PostgrestTransformBuilder: a.default,
		PostgrestBuilder: o.default,
		PostgrestError: s.default
	};
})), da, fa, pa, ma, ha, ga, _a, va = o((() => {
	da = /* @__PURE__ */ u(ua(), 1), {PostgrestClient: fa, PostgrestQueryBuilder: pa, PostgrestFilterBuilder: ma, PostgrestTransformBuilder: ha, PostgrestBuilder: ga, PostgrestError: _a} = da.default;
})), ya, ba = o((() => {
	ya = class {
		static detectEnvironment() {
			if (typeof WebSocket < "u") return {
				type: "native",
				constructor: WebSocket
			};
			if (typeof globalThis < "u" && globalThis.WebSocket !== void 0) return {
				type: "native",
				constructor: globalThis.WebSocket
			};
			if (typeof global < "u" && global.WebSocket !== void 0) return {
				type: "native",
				constructor: global.WebSocket
			};
			if (typeof globalThis < "u" && globalThis.WebSocketPair !== void 0 && globalThis.WebSocket === void 0) return {
				type: "cloudflare",
				error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
				workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
			};
			if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && navigator.userAgent?.includes("Vercel-Edge")) return {
				type: "unsupported",
				error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
				workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
			};
			if (typeof process < "u") {
				let e = process.versions;
				if (e && e.node) {
					let t = e.node, n = parseInt(t.replace(/^v/, "").split(".")[0]);
					return n >= 22 ? globalThis.WebSocket === void 0 ? {
						type: "unsupported",
						error: `Node.js ${n} detected but native WebSocket not found.`,
						workaround: "Provide a WebSocket implementation via the transport option."
					} : {
						type: "native",
						constructor: globalThis.WebSocket
					} : {
						type: "unsupported",
						error: `Node.js ${n} detected without native WebSocket support.`,
						workaround: "For Node.js < 22, install \"ws\" package and provide it via the transport option:\nimport ws from \"ws\"\nnew RealtimeClient(url, { transport: ws })"
					};
				}
			}
			return {
				type: "unsupported",
				error: "Unknown JavaScript runtime without WebSocket support.",
				workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
			};
		}
		static getWebSocketConstructor() {
			let e = this.detectEnvironment();
			if (e.constructor) return e.constructor;
			let t = e.error || "WebSocket not supported in this environment.";
			throw e.workaround && (t += `\n\nSuggested solution: ${e.workaround}`), Error(t);
		}
		static createWebSocket(e, t) {
			return new (this.getWebSocketConstructor())(e, t);
		}
		static isWebSocketSupported() {
			try {
				let e = this.detectEnvironment();
				return e.type === "native" || e.type === "ws";
			} catch {
				return !1;
			}
		}
	};
})), xa, Sa = o((() => {
	xa = "2.76.1";
})), Ca, wa, Ta, Ea, V, H, Da, Oa, ka = o((() => {
	Sa(), Ca = `realtime-js/${xa}`, wa = "1.0.0", Ta = 1e4, (function(e) {
		e[e.connecting = 0] = "connecting", e[e.open = 1] = "open", e[e.closing = 2] = "closing", e[e.closed = 3] = "closed";
	})(Ea ||= {}), (function(e) {
		e.closed = "closed", e.errored = "errored", e.joined = "joined", e.joining = "joining", e.leaving = "leaving";
	})(V ||= {}), (function(e) {
		e.close = "phx_close", e.error = "phx_error", e.join = "phx_join", e.reply = "phx_reply", e.leave = "phx_leave", e.access_token = "access_token";
	})(H ||= {}), (function(e) {
		e.websocket = "websocket";
	})(Da ||= {}), (function(e) {
		e.Connecting = "connecting", e.Open = "open", e.Closing = "closing", e.Closed = "closed";
	})(Oa ||= {});
})), Aa, ja = o((() => {
	Aa = class {
		constructor() {
			this.HEADER_LENGTH = 1;
		}
		decode(e, t) {
			return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : t(typeof e == "string" ? JSON.parse(e) : {});
		}
		_binaryDecode(e) {
			let t = new DataView(e), n = new TextDecoder();
			return this._decodeBroadcast(e, t, n);
		}
		_decodeBroadcast(e, t, n) {
			let r = t.getUint8(1), i = t.getUint8(2), a = this.HEADER_LENGTH + 2, o = n.decode(e.slice(a, a + r));
			a += r;
			let s = n.decode(e.slice(a, a + i));
			return a += i, {
				ref: null,
				topic: o,
				event: s,
				payload: JSON.parse(n.decode(e.slice(a, e.byteLength)))
			};
		}
	};
})), Ma, Na = o((() => {
	Ma = class {
		constructor(e, t) {
			this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t;
		}
		reset() {
			this.tries = 0, clearTimeout(this.timer), this.timer = void 0;
		}
		scheduleTimeout() {
			clearTimeout(this.timer), this.timer = setTimeout(() => {
				this.tries += 1, this.callback();
			}, this.timerCalc(this.tries + 1));
		}
	};
})), U, Pa, Fa, Ia, La, Ra, za, Ba, Va, Ha, Ua, Wa = o((() => {
	(function(e) {
		e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange";
	})(U ||= {}), Pa = (e, t, n = {}) => {
		let r = n.skipTypes ?? [];
		return t ? Object.keys(t).reduce((n, i) => (n[i] = Fa(i, e, t, r), n), {}) : {};
	}, Fa = (e, t, n, r) => {
		let i = t.find((t) => t.name === e)?.type, a = n[e];
		return i && !r.includes(i) ? Ia(i, a) : La(a);
	}, Ia = (e, t) => {
		if (e.charAt(0) === "_") {
			let n = e.slice(1, e.length);
			return Va(t, n);
		}
		switch (e) {
			case U.bool: return Ra(t);
			case U.float4:
			case U.float8:
			case U.int2:
			case U.int4:
			case U.int8:
			case U.numeric:
			case U.oid: return za(t);
			case U.json:
			case U.jsonb: return Ba(t);
			case U.timestamp: return Ha(t);
			case U.abstime:
			case U.date:
			case U.daterange:
			case U.int4range:
			case U.int8range:
			case U.money:
			case U.reltime:
			case U.text:
			case U.time:
			case U.timestamptz:
			case U.timetz:
			case U.tsrange:
			case U.tstzrange:
			default: return La(t);
		}
	}, La = (e) => e, Ra = (e) => {
		switch (e) {
			case "t": return !0;
			case "f": return !1;
			default: return e;
		}
	}, za = (e) => {
		if (typeof e == "string") {
			let t = parseFloat(e);
			if (!Number.isNaN(t)) return t;
		}
		return e;
	}, Ba = (e) => {
		if (typeof e == "string") try {
			return JSON.parse(e);
		} catch (t) {
			return console.log(`JSON parse error: ${t}`), e;
		}
		return e;
	}, Va = (e, t) => {
		if (typeof e != "string") return e;
		let n = e.length - 1, r = e[n];
		if (e[0] === "{" && r === "}") {
			let r, i = e.slice(1, n);
			try {
				r = JSON.parse("[" + i + "]");
			} catch {
				r = i ? i.split(",") : [];
			}
			return r.map((e) => Ia(t, e));
		}
		return e;
	}, Ha = (e) => typeof e == "string" ? e.replace(" ", "T") : e, Ua = (e) => {
		let t = new URL(e);
		return t.protocol = t.protocol.replace(/^ws/i, "http"), t.pathname = t.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), t.pathname === "" || t.pathname === "/" ? t.pathname = "/api/broadcast" : t.pathname += "/api/broadcast", t.href;
	};
})), Ga, Ka = o((() => {
	ka(), Ga = class {
		constructor(e, t, n = {}, r = Ta) {
			this.channel = e, this.event = t, this.payload = n, this.timeout = r, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
		}
		resend(e) {
			this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
		}
		send() {
			this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
				topic: this.channel.topic,
				event: this.event,
				payload: this.payload,
				ref: this.ref,
				join_ref: this.channel._joinRef()
			}));
		}
		updatePayload(e) {
			this.payload = Object.assign(Object.assign({}, this.payload), e);
		}
		receive(e, t) {
			return this._hasReceived(e) && t(this.receivedResp?.response), this.recHooks.push({
				status: e,
				callback: t
			}), this;
		}
		startTimeout() {
			this.timeoutTimer ||= (this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref), this.channel._on(this.refEvent, {}, (e) => {
				this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = e, this._matchReceive(e);
			}), setTimeout(() => {
				this.trigger("timeout", {});
			}, this.timeout));
		}
		trigger(e, t) {
			this.refEvent && this.channel._trigger(this.refEvent, {
				status: e,
				response: t
			});
		}
		destroy() {
			this._cancelRefEvent(), this._cancelTimeout();
		}
		_cancelRefEvent() {
			this.refEvent && this.channel._off(this.refEvent, {});
		}
		_cancelTimeout() {
			clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
		}
		_matchReceive({ status: e, response: t }) {
			this.recHooks.filter((t) => t.status === e).forEach((e) => e.callback(t));
		}
		_hasReceived(e) {
			return this.receivedResp && this.receivedResp.status === e;
		}
	};
})), qa, Ja, Ya = o((() => {
	(function(e) {
		e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave";
	})(qa ||= {}), Ja = class e {
		constructor(t, n) {
			this.channel = t, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.enabled = !1, this.caller = {
				onJoin: () => {},
				onLeave: () => {},
				onSync: () => {}
			};
			let r = n?.events || {
				state: "presence_state",
				diff: "presence_diff"
			};
			this.channel._on(r.state, {}, (t) => {
				let { onJoin: n, onLeave: r, onSync: i } = this.caller;
				this.joinRef = this.channel._joinRef(), this.state = e.syncState(this.state, t, n, r), this.pendingDiffs.forEach((t) => {
					this.state = e.syncDiff(this.state, t, n, r);
				}), this.pendingDiffs = [], i();
			}), this.channel._on(r.diff, {}, (t) => {
				let { onJoin: n, onLeave: r, onSync: i } = this.caller;
				this.inPendingSyncState() ? this.pendingDiffs.push(t) : (this.state = e.syncDiff(this.state, t, n, r), i());
			}), this.onJoin((e, t, n) => {
				this.channel._trigger("presence", {
					event: "join",
					key: e,
					currentPresences: t,
					newPresences: n
				});
			}), this.onLeave((e, t, n) => {
				this.channel._trigger("presence", {
					event: "leave",
					key: e,
					currentPresences: t,
					leftPresences: n
				});
			}), this.onSync(() => {
				this.channel._trigger("presence", { event: "sync" });
			});
		}
		static syncState(e, t, n, r) {
			let i = this.cloneDeep(e), a = this.transformState(t), o = {}, s = {};
			return this.map(i, (e, t) => {
				a[e] || (s[e] = t);
			}), this.map(a, (e, t) => {
				let n = i[e];
				if (n) {
					let r = t.map((e) => e.presence_ref), i = n.map((e) => e.presence_ref), a = t.filter((e) => i.indexOf(e.presence_ref) < 0), c = n.filter((e) => r.indexOf(e.presence_ref) < 0);
					a.length > 0 && (o[e] = a), c.length > 0 && (s[e] = c);
				} else o[e] = t;
			}), this.syncDiff(i, {
				joins: o,
				leaves: s
			}, n, r);
		}
		static syncDiff(e, t, n, r) {
			let { joins: i, leaves: a } = {
				joins: this.transformState(t.joins),
				leaves: this.transformState(t.leaves)
			};
			return n ||= () => {}, r ||= () => {}, this.map(i, (t, r) => {
				let i = e[t] ?? [];
				if (e[t] = this.cloneDeep(r), i.length > 0) {
					let n = e[t].map((e) => e.presence_ref), r = i.filter((e) => n.indexOf(e.presence_ref) < 0);
					e[t].unshift(...r);
				}
				n(t, i, r);
			}), this.map(a, (t, n) => {
				let i = e[t];
				if (!i) return;
				let a = n.map((e) => e.presence_ref);
				i = i.filter((e) => a.indexOf(e.presence_ref) < 0), e[t] = i, r(t, i, n), i.length === 0 && delete e[t];
			}), e;
		}
		static map(e, t) {
			return Object.getOwnPropertyNames(e).map((n) => t(n, e[n]));
		}
		static transformState(e) {
			return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((t, n) => {
				let r = e[n];
				return t[n] = "metas" in r ? r.metas.map((e) => (e.presence_ref = e.phx_ref, delete e.phx_ref, delete e.phx_ref_prev, e)) : r, t;
			}, {});
		}
		static cloneDeep(e) {
			return JSON.parse(JSON.stringify(e));
		}
		onJoin(e) {
			this.caller.onJoin = e;
		}
		onLeave(e) {
			this.caller.onLeave = e;
		}
		onSync(e) {
			this.caller.onSync = e;
		}
		inPendingSyncState() {
			return !this.joinRef || this.joinRef !== this.channel._joinRef();
		}
	};
})), Xa, Za, Qa, $a, eo, to = o((() => {
	ka(), Ka(), Na(), Ya(), Wa(), (function(e) {
		e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE";
	})(Xa ||= {}), (function(e) {
		e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes", e.SYSTEM = "system";
	})(Za ||= {}), (function(e) {
		e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR";
	})(Qa ||= {}), $a = V, eo = class e {
		constructor(e, t = { config: {} }, n) {
			if (this.topic = e, this.params = t, this.socket = n, this.bindings = {}, this.state = V.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
				broadcast: {
					ack: !1,
					self: !1
				},
				presence: {
					key: "",
					enabled: !1
				},
				private: !1
			}, t.config), this.timeout = this.socket.timeout, this.joinPush = new Ga(this, H.join, this.params, this.timeout), this.rejoinTimer = new Ma(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
				this.state = V.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((e) => e.send()), this.pushBuffer = [];
			}), this._onClose(() => {
				this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = V.closed, this.socket._remove(this);
			}), this._onError((e) => {
				this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, e), this.state = V.errored, this.rejoinTimer.scheduleTimeout());
			}), this.joinPush.receive("timeout", () => {
				this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = V.errored, this.rejoinTimer.scheduleTimeout());
			}), this.joinPush.receive("error", (e) => {
				this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, e), this.state = V.errored, this.rejoinTimer.scheduleTimeout());
			}), this._on(H.reply, {}, (e, t) => {
				this._trigger(this._replyEventName(t), e);
			}), this.presence = new Ja(this), this.broadcastEndpointURL = Ua(this.socket.endPoint), this.private = this.params.config.private || !1, !this.private && this.params.config?.broadcast?.replay) throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
		}
		subscribe(e, t = this.timeout) {
			if (this.socket.isConnected() || this.socket.connect(), this.state == V.closed) {
				let { config: { broadcast: n, presence: r, private: i } } = this.params, a = this.bindings.postgres_changes?.map((e) => e.filter) ?? [], o = !!this.bindings[Za.PRESENCE] && this.bindings[Za.PRESENCE].length > 0 || this.params.config.presence?.enabled === !0, s = {}, c = {
					broadcast: n,
					presence: Object.assign(Object.assign({}, r), { enabled: o }),
					postgres_changes: a,
					private: i
				};
				this.socket.accessTokenValue && (s.access_token = this.socket.accessTokenValue), this._onError((t) => e?.(Qa.CHANNEL_ERROR, t)), this._onClose(() => e?.(Qa.CLOSED)), this.updateJoinPayload(Object.assign({ config: c }, s)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", async ({ postgres_changes: t }) => {
					if (this.socket.setAuth(), t === void 0) e?.(Qa.SUBSCRIBED);
					else {
						let n = this.bindings.postgres_changes, r = n?.length ?? 0, i = [];
						for (let a = 0; a < r; a++) {
							let r = n[a], { filter: { event: o, schema: s, table: c, filter: l } } = r, u = t && t[a];
							if (u && u.event === o && u.schema === s && u.table === c && u.filter === l) i.push(Object.assign(Object.assign({}, r), { id: u.id }));
							else {
								this.unsubscribe(), this.state = V.errored, e?.(Qa.CHANNEL_ERROR, /* @__PURE__ */ Error("mismatch between server and client bindings for postgres changes"));
								return;
							}
						}
						this.bindings.postgres_changes = i, e && e(Qa.SUBSCRIBED);
						return;
					}
				}).receive("error", (t) => {
					this.state = V.errored, e?.(Qa.CHANNEL_ERROR, Error(JSON.stringify(Object.values(t).join(", ") || "error")));
				}).receive("timeout", () => {
					e?.(Qa.TIMED_OUT);
				});
			}
			return this;
		}
		presenceState() {
			return this.presence.state;
		}
		async track(e, t = {}) {
			return await this.send({
				type: "presence",
				event: "track",
				payload: e
			}, t.timeout || this.timeout);
		}
		async untrack(e = {}) {
			return await this.send({
				type: "presence",
				event: "untrack"
			}, e);
		}
		on(e, t, n) {
			return this.state === V.joined && e === Za.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(() => this.subscribe())), this._on(e, t, n);
		}
		async httpSend(e, t, n = {}) {
			let r = this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "";
			if (t == null) return Promise.reject("Payload is required for httpSend()");
			let i = {
				method: "POST",
				headers: {
					Authorization: r,
					apikey: this.socket.apiKey ? this.socket.apiKey : "",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ messages: [{
					topic: this.subTopic,
					event: e,
					payload: t,
					private: this.private
				}] })
			}, a = await this._fetchWithTimeout(this.broadcastEndpointURL, i, n.timeout ?? this.timeout);
			if (a.status === 202) return { success: !0 };
			let o = a.statusText;
			try {
				let e = await a.json();
				o = e.error || e.message || o;
			} catch {}
			return Promise.reject(Error(o));
		}
		async send(e, t = {}) {
			if (!this._canPush() && e.type === "broadcast") {
				console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
				let { event: n, payload: r } = e, i = {
					method: "POST",
					headers: {
						Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
						apikey: this.socket.apiKey ? this.socket.apiKey : "",
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ messages: [{
						topic: this.subTopic,
						event: n,
						payload: r,
						private: this.private
					}] })
				};
				try {
					let e = await this._fetchWithTimeout(this.broadcastEndpointURL, i, t.timeout ?? this.timeout);
					return await e.body?.cancel(), e.ok ? "ok" : "error";
				} catch (e) {
					return e.name === "AbortError" ? "timed out" : "error";
				}
			}
			return new Promise((n) => {
				let r = this._push(e.type, e, t.timeout || this.timeout);
				e.type === "broadcast" && !this.params?.config?.broadcast?.ack && n("ok"), r.receive("ok", () => n("ok")), r.receive("error", () => n("error")), r.receive("timeout", () => n("timed out"));
			});
		}
		updateJoinPayload(e) {
			this.joinPush.updatePayload(e);
		}
		unsubscribe(e = this.timeout) {
			this.state = V.leaving;
			let t = () => {
				this.socket.log("channel", `leave ${this.topic}`), this._trigger(H.close, "leave", this._joinRef());
			};
			this.joinPush.destroy();
			let n = null;
			return new Promise((r) => {
				n = new Ga(this, H.leave, {}, e), n.receive("ok", () => {
					t(), r("ok");
				}).receive("timeout", () => {
					t(), r("timed out");
				}).receive("error", () => {
					r("error");
				}), n.send(), this._canPush() || n.trigger("ok", {});
			}).finally(() => {
				n?.destroy();
			});
		}
		teardown() {
			this.pushBuffer.forEach((e) => e.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = V.closed, this.bindings = {};
		}
		async _fetchWithTimeout(e, t, n) {
			let r = new AbortController(), i = setTimeout(() => r.abort(), n), a = await this.socket.fetch(e, Object.assign(Object.assign({}, t), { signal: r.signal }));
			return clearTimeout(i), a;
		}
		_push(e, t, n = this.timeout) {
			if (!this.joinedOnce) throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
			let r = new Ga(this, e, t, n);
			return this._canPush() ? r.send() : this._addToPushBuffer(r), r;
		}
		_addToPushBuffer(e) {
			if (e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > 100) {
				let e = this.pushBuffer.shift();
				e && (e.destroy(), this.socket.log("channel", `discarded push due to buffer overflow: ${e.event}`, e.payload));
			}
		}
		_onMessage(e, t, n) {
			return t;
		}
		_isMember(e) {
			return this.topic === e;
		}
		_joinRef() {
			return this.joinPush.ref;
		}
		_trigger(e, t, n) {
			var r, i;
			let a = e.toLocaleLowerCase(), { close: o, error: s, leave: c, join: l } = H;
			if (n && [
				o,
				s,
				c,
				l
			].indexOf(a) >= 0 && n !== this._joinRef()) return;
			let u = this._onMessage(a, t, n);
			if (t && !u) throw "channel onMessage callbacks must return the payload, modified or unmodified";
			[
				"insert",
				"update",
				"delete"
			].includes(a) ? (r = this.bindings.postgres_changes) == null || r.filter((e) => e.filter?.event === "*" || (e.filter?.event)?.toLocaleLowerCase() === a).map((e) => e.callback(u, n)) : (i = this.bindings[a]) == null || i.filter((e) => {
				if ([
					"broadcast",
					"presence",
					"postgres_changes"
				].includes(a)) {
					if ("id" in e) {
						let n = e.id, r = e.filter?.event;
						return n && t.ids?.includes(n) && (r === "*" || r?.toLocaleLowerCase() === t.data?.type.toLocaleLowerCase());
					}
					{
						let n = (e?.filter?.event)?.toLocaleLowerCase();
						return n === "*" || n === (t?.event)?.toLocaleLowerCase();
					}
				}
				return e.type.toLocaleLowerCase() === a;
			}).map((e) => {
				if (typeof u == "object" && "ids" in u) {
					let e = u.data, { schema: t, table: n, commit_timestamp: r, type: i, errors: a } = e;
					u = Object.assign(Object.assign({}, {
						schema: t,
						table: n,
						commit_timestamp: r,
						eventType: i,
						new: {},
						old: {},
						errors: a
					}), this._getPayloadRecords(e));
				}
				e.callback(u, n);
			});
		}
		_isClosed() {
			return this.state === V.closed;
		}
		_isJoined() {
			return this.state === V.joined;
		}
		_isJoining() {
			return this.state === V.joining;
		}
		_isLeaving() {
			return this.state === V.leaving;
		}
		_replyEventName(e) {
			return `chan_reply_${e}`;
		}
		_on(e, t, n) {
			let r = e.toLocaleLowerCase(), i = {
				type: r,
				filter: t,
				callback: n
			};
			return this.bindings[r] ? this.bindings[r].push(i) : this.bindings[r] = [i], this;
		}
		_off(t, n) {
			let r = t.toLocaleLowerCase();
			return this.bindings[r] && (this.bindings[r] = this.bindings[r].filter((t) => !(t.type?.toLocaleLowerCase() === r && e.isEqual(t.filter, n)))), this;
		}
		static isEqual(e, t) {
			if (Object.keys(e).length !== Object.keys(t).length) return !1;
			for (let n in e) if (e[n] !== t[n]) return !1;
			return !0;
		}
		_rejoinUntilConnected() {
			this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
		}
		_onClose(e) {
			this._on(H.close, {}, e);
		}
		_onError(e) {
			this._on(H.error, {}, (t) => e(t));
		}
		_canPush() {
			return this.socket.isConnected() && this._isJoined();
		}
		_rejoin(e = this.timeout) {
			this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = V.joining, this.joinPush.resend(e));
		}
		_getPayloadRecords(e) {
			let t = {
				new: {},
				old: {}
			};
			return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = Pa(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = Pa(e.columns, e.old_record)), t;
		}
	};
})), no, ro, io, ao, oo, so, co = o((() => {
	ba(), ka(), ja(), Na(), Wa(), to(), no = () => {}, ro = {
		HEARTBEAT_INTERVAL: 25e3,
		RECONNECT_DELAY: 10,
		HEARTBEAT_TIMEOUT_FALLBACK: 100
	}, io = [
		1e3,
		2e3,
		5e3,
		1e4
	], ao = 1e4, oo = "\n  addEventListener(\"message\", (e) => {\n    if (e.data.event === \"start\") {\n      setInterval(() => postMessage({ event: \"keepAlive\" }), e.data.interval);\n    }\n  });", so = class {
		constructor(e, t) {
			if (this.accessTokenValue = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = Ta, this.transport = null, this.heartbeatIntervalMs = ro.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = no, this.ref = 0, this.reconnectTimer = null, this.logger = no, this.conn = null, this.sendBuffer = [], this.serializer = new Aa(), this.stateChangeCallbacks = {
				open: [],
				close: [],
				error: [],
				message: []
			}, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._resolveFetch = (e) => {
				let t;
				return t = e || (typeof fetch > "u" ? (...e) => Promise.resolve().then(() => (Ki(), Ri)).then(({ default: t }) => t(...e)).catch((e) => {
					throw Error(`Failed to load @supabase/node-fetch: ${e.message}. This is required for HTTP requests in Node.js environments without native fetch.`);
				}) : fetch), (...e) => t(...e);
			}, !t?.params?.apikey) throw Error("API key is required to connect to Realtime");
			this.apiKey = t.params.apikey, this.endPoint = `${e}/${Da.websocket}`, this.httpEndpoint = Ua(e), this._initializeOptions(t), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(t?.fetch);
		}
		connect() {
			if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
				if (this._setConnectionState("connecting"), this._setAuthSafely("connect"), this.transport) this.conn = new this.transport(this.endpointURL());
				else try {
					this.conn = ya.createWebSocket(this.endpointURL());
				} catch (e) {
					this._setConnectionState("disconnected");
					let t = e.message;
					throw t.includes("Node.js") ? Error(`${t}\n\nTo use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : Error(`WebSocket not available: ${t}`);
				}
				this._setupConnectionHandlers();
			}
		}
		endpointURL() {
			return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: wa }));
		}
		disconnect(e, t) {
			if (!this.isDisconnecting()) {
				if (this._setConnectionState("disconnecting", !0), this.conn) {
					let n = setTimeout(() => {
						this._setConnectionState("disconnected");
					}, 100);
					this.conn.onclose = () => {
						clearTimeout(n), this._setConnectionState("disconnected");
					}, e ? this.conn.close(e, t ?? "") : this.conn.close(), this._teardownConnection();
				} else this._setConnectionState("disconnected");
			}
		}
		getChannels() {
			return this.channels;
		}
		async removeChannel(e) {
			let t = await e.unsubscribe();
			return this.channels.length === 0 && this.disconnect(), t;
		}
		async removeAllChannels() {
			let e = await Promise.all(this.channels.map((e) => e.unsubscribe()));
			return this.channels = [], this.disconnect(), e;
		}
		log(e, t, n) {
			this.logger(e, t, n);
		}
		connectionState() {
			switch (this.conn && this.conn.readyState) {
				case Ea.connecting: return Oa.Connecting;
				case Ea.open: return Oa.Open;
				case Ea.closing: return Oa.Closing;
				default: return Oa.Closed;
			}
		}
		isConnected() {
			return this.connectionState() === Oa.Open;
		}
		isConnecting() {
			return this._connectionState === "connecting";
		}
		isDisconnecting() {
			return this._connectionState === "disconnecting";
		}
		channel(e, t = { config: {} }) {
			let n = `realtime:${e}`, r = this.getChannels().find((e) => e.topic === n);
			if (r) return r;
			{
				let n = new eo(`realtime:${e}`, t, this);
				return this.channels.push(n), n;
			}
		}
		push(e) {
			let { topic: t, event: n, payload: r, ref: i } = e, a = () => {
				this.encode(e, (e) => {
					var t;
					(t = this.conn) == null || t.send(e);
				});
			};
			this.log("push", `${t} ${n} (${i})`, r), this.isConnected() ? a() : this.sendBuffer.push(a);
		}
		async setAuth(e = null) {
			this._authPromise = this._performAuth(e);
			try {
				await this._authPromise;
			} finally {
				this._authPromise = null;
			}
		}
		async sendHeartbeat() {
			var e;
			if (!this.isConnected()) try {
				this.heartbeatCallback("disconnected");
			} catch (e) {
				this.log("error", "error in heartbeat callback", e);
			}
			else if (this.pendingHeartbeatRef) {
				this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
				try {
					this.heartbeatCallback("timeout");
				} catch (e) {
					this.log("error", "error in heartbeat callback", e);
				}
				this._wasManualDisconnect = !1, (e = this.conn) == null || e.close(1e3, "heartbeat timeout"), setTimeout(() => {
					var e;
					this.isConnected() || (e = this.reconnectTimer) == null || e.scheduleTimeout();
				}, ro.HEARTBEAT_TIMEOUT_FALLBACK);
			} else {
				this.pendingHeartbeatRef = this._makeRef(), this.push({
					topic: "phoenix",
					event: "heartbeat",
					payload: {},
					ref: this.pendingHeartbeatRef
				});
				try {
					this.heartbeatCallback("sent");
				} catch (e) {
					this.log("error", "error in heartbeat callback", e);
				}
				this._setAuthSafely("heartbeat");
			}
		}
		onHeartbeat(e) {
			this.heartbeatCallback = e;
		}
		flushSendBuffer() {
			this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
		}
		_makeRef() {
			let e = this.ref + 1;
			return this.ref = e === this.ref ? 0 : e, this.ref.toString();
		}
		_leaveOpenTopic(e) {
			let t = this.channels.find((t) => t.topic === e && (t._isJoined() || t._isJoining()));
			t && (this.log("transport", `leaving duplicate topic "${e}"`), t.unsubscribe());
		}
		_remove(e) {
			this.channels = this.channels.filter((t) => t.topic !== e.topic);
		}
		_onConnMessage(e) {
			this.decode(e.data, (e) => {
				if (e.topic === "phoenix" && e.event === "phx_reply") try {
					this.heartbeatCallback(e.payload.status === "ok" ? "ok" : "error");
				} catch (e) {
					this.log("error", "error in heartbeat callback", e);
				}
				e.ref && e.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
				let { topic: t, event: n, payload: r, ref: i } = e, a = i ? `(${i})` : "", o = r.status || "";
				this.log("receive", `${o} ${t} ${n} ${a}`.trim(), r), this.channels.filter((e) => e._isMember(t)).forEach((e) => e._trigger(n, r, i)), this._triggerStateCallbacks("message", e);
			});
		}
		_clearTimer(e) {
			var t;
			e === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer), this.heartbeatTimer = void 0) : e === "reconnect" && ((t = this.reconnectTimer) == null || t.reset());
		}
		_clearAllTimers() {
			this._clearTimer("heartbeat"), this._clearTimer("reconnect");
		}
		_setupConnectionHandlers() {
			this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e) => this._onConnError(e), this.conn.onmessage = (e) => this._onConnMessage(e), this.conn.onclose = (e) => this._onConnClose(e));
		}
		_teardownConnection() {
			this.conn &&= (this.conn.onopen = null, this.conn.onerror = null, this.conn.onmessage = null, this.conn.onclose = null, null), this._clearAllTimers(), this.channels.forEach((e) => e.teardown());
		}
		_onConnOpen() {
			this._setConnectionState("connected"), this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this._clearTimer("reconnect"), this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(), this._triggerStateCallbacks("open");
		}
		_startHeartbeat() {
			this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
		}
		_startWorkerHeartbeat() {
			this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
			let e = this._workerObjectUrl(this.workerUrl);
			this.workerRef = new Worker(e), this.workerRef.onerror = (e) => {
				this.log("worker", "worker error", e.message), this.workerRef.terminate();
			}, this.workerRef.onmessage = (e) => {
				e.data.event === "keepAlive" && this.sendHeartbeat();
			}, this.workerRef.postMessage({
				event: "start",
				interval: this.heartbeatIntervalMs
			});
		}
		_onConnClose(e) {
			var t;
			this._setConnectionState("disconnected"), this.log("transport", "close", e), this._triggerChanError(), this._clearTimer("heartbeat"), this._wasManualDisconnect || (t = this.reconnectTimer) == null || t.scheduleTimeout(), this._triggerStateCallbacks("close", e);
		}
		_onConnError(e) {
			this._setConnectionState("disconnected"), this.log("transport", `${e}`), this._triggerChanError(), this._triggerStateCallbacks("error", e);
		}
		_triggerChanError() {
			this.channels.forEach((e) => e._trigger(H.error));
		}
		_appendParams(e, t) {
			return Object.keys(t).length === 0 ? e : `${e}${e.match(/\?/) ? "&" : "?"}${new URLSearchParams(t)}`;
		}
		_workerObjectUrl(e) {
			let t;
			if (e) t = e;
			else {
				let e = new Blob([oo], { type: "application/javascript" });
				t = URL.createObjectURL(e);
			}
			return t;
		}
		_setConnectionState(e, t = !1) {
			this._connectionState = e, e === "connecting" ? this._wasManualDisconnect = !1 : e === "disconnecting" && (this._wasManualDisconnect = t);
		}
		async _performAuth(e = null) {
			let t;
			t = e || (this.accessToken ? await this.accessToken() : this.accessTokenValue), this.accessTokenValue != t && (this.accessTokenValue = t, this.channels.forEach((e) => {
				let n = {
					access_token: t,
					version: Ca
				};
				t && e.updateJoinPayload(n), e.joinedOnce && e._isJoined() && e._push(H.access_token, { access_token: t });
			}));
		}
		async _waitForAuthIfNeeded() {
			this._authPromise && await this._authPromise;
		}
		_setAuthSafely(e = "general") {
			this.setAuth().catch((t) => {
				this.log("error", `error setting auth in ${e}`, t);
			});
		}
		_triggerStateCallbacks(e, t) {
			try {
				this.stateChangeCallbacks[e].forEach((n) => {
					try {
						n(t);
					} catch (t) {
						this.log("error", `error in ${e} callback`, t);
					}
				});
			} catch (t) {
				this.log("error", `error triggering ${e} callbacks`, t);
			}
		}
		_setupReconnectionTimer() {
			this.reconnectTimer = new Ma(async () => {
				setTimeout(async () => {
					await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
				}, ro.RECONNECT_DELAY);
			}, this.reconnectAfterMs);
		}
		_initializeOptions(e) {
			if (this.transport = e?.transport ?? null, this.timeout = e?.timeout ?? Ta, this.heartbeatIntervalMs = e?.heartbeatIntervalMs ?? ro.HEARTBEAT_INTERVAL, this.worker = e?.worker ?? !1, this.accessToken = e?.accessToken ?? null, this.heartbeatCallback = e?.heartbeatCallback ?? no, e?.params && (this.params = e.params), e?.logger && (this.logger = e.logger), (e?.logLevel || e?.log_level) && (this.logLevel = e.logLevel || e.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = e?.reconnectAfterMs ?? ((e) => io[e - 1] || ao), this.encode = e?.encode ?? ((e, t) => t(JSON.stringify(e))), this.decode = e?.decode ?? this.serializer.decode.bind(this.serializer), this.worker) {
				if (typeof window < "u" && !window.Worker) throw Error("Web Worker is not supported");
				this.workerUrl = e?.workerUrl;
			}
		}
	};
})), lo = o((() => {
	co(), to(), Ya(), ba();
}));
// node_modules/.pnpm/@supabase+storage-js@2.76.1/node_modules/@supabase/storage-js/dist/module/lib/errors.js
function W(e) {
	return typeof e == "object" && !!e && "__isStorageError" in e;
}
var uo, fo, po, mo = o((() => {
	uo = class extends Error {
		constructor(e) {
			super(e), this.__isStorageError = !0, this.name = "StorageError";
		}
	}, fo = class extends uo {
		constructor(e, t, n) {
			super(e), this.name = "StorageApiError", this.status = t, this.statusCode = n;
		}
		toJSON() {
			return {
				name: this.name,
				message: this.message,
				status: this.status,
				statusCode: this.statusCode
			};
		}
	}, po = class extends uo {
		constructor(e, t) {
			super(e), this.name = "StorageUnknownError", this.originalError = t;
		}
	};
})), ho, go, _o, vo, yo = o((() => {
	B(), ho = (e) => {
		let t;
		return t = e || (typeof fetch > "u" ? (...e) => Promise.resolve().then(() => (Ki(), Ri)).then(({ default: t }) => t(...e)) : fetch), (...e) => t(...e);
	}, go = () => z(void 0, void 0, void 0, function* () {
		return typeof Response > "u" ? (yield Promise.resolve().then(() => (Ki(), Ri))).Response : Response;
	}), _o = (e) => {
		if (Array.isArray(e)) return e.map((e) => _o(e));
		if (typeof e == "function" || e !== Object(e)) return e;
		let t = {};
		return Object.entries(e).forEach(([e, n]) => {
			let r = e.replace(/([-_][a-z])/gi, (e) => e.toUpperCase().replace(/[-_]/g, ""));
			t[r] = _o(n);
		}), t;
	}, vo = (e) => {
		if (typeof e != "object" || !e) return !1;
		let t = Object.getPrototypeOf(e);
		return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
	};
}));
// node_modules/.pnpm/@supabase+storage-js@2.76.1/node_modules/@supabase/storage-js/dist/module/lib/fetch.js
function bo(e, t, n, r, i, a) {
	return z(this, void 0, void 0, function* () {
		return new Promise((o, s) => {
			e(n, Do(t, r, i, a)).then((e) => {
				if (!e.ok) throw e;
				return r?.noResolveJson ? e : e.json();
			}).then((e) => o(e)).catch((e) => Eo(e, s, r));
		});
	});
}
function xo(e, t, n, r) {
	return z(this, void 0, void 0, function* () {
		return bo(e, "GET", t, n, r);
	});
}
function G(e, t, n, r, i) {
	return z(this, void 0, void 0, function* () {
		return bo(e, "POST", t, r, i, n);
	});
}
function So(e, t, n, r, i) {
	return z(this, void 0, void 0, function* () {
		return bo(e, "PUT", t, r, i, n);
	});
}
function Co(e, t, n, r) {
	return z(this, void 0, void 0, function* () {
		return bo(e, "HEAD", t, Object.assign(Object.assign({}, n), { noResolveJson: !0 }), r);
	});
}
function wo(e, t, n, r, i) {
	return z(this, void 0, void 0, function* () {
		return bo(e, "DELETE", t, r, i, n);
	});
}
var To, Eo, Do, Oo = o((() => {
	B(), mo(), yo(), To = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e), Eo = (e, t, n) => z(void 0, void 0, void 0, function* () {
		e instanceof (yield go()) && !n?.noResolveJson ? e.json().then((n) => {
			let r = e.status || 500, i = n?.statusCode || r + "";
			t(new fo(To(n), r, i));
		}).catch((e) => {
			t(new po(To(e), e));
		}) : t(new po(To(e), e));
	}), Do = (e, t, n, r) => {
		let i = {
			method: e,
			headers: t?.headers || {}
		};
		return e === "GET" || !r ? i : (vo(r) ? (i.headers = Object.assign({ "Content-Type": "application/json" }, t?.headers), i.body = JSON.stringify(r)) : i.body = r, t?.duplex && (i.duplex = t.duplex), Object.assign(Object.assign({}, i), n));
	};
})), ko, Ao = o((() => {
	B(), mo(), ko = class {
		constructor(e, t) {
			this.downloadFn = e, this.shouldThrowOnError = t;
		}
		then(e, t) {
			return this.execute().then(e, t);
		}
		execute() {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: (yield this.downloadFn()).body,
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
	};
})), jo, Mo, No = o((() => {
	B(), mo(), Ao(), Mo = class {
		constructor(e, t) {
			this.downloadFn = e, this.shouldThrowOnError = t, this[jo] = "BlobDownloadBuilder", this.promise = null;
		}
		asStream() {
			return new ko(this.downloadFn, this.shouldThrowOnError);
		}
		then(e, t) {
			return this.getPromise().then(e, t);
		}
		catch(e) {
			return this.getPromise().catch(e);
		}
		finally(e) {
			return this.getPromise().finally(e);
		}
		getPromise() {
			return this.promise ||= this.execute(), this.promise;
		}
		execute() {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield (yield this.downloadFn()).blob(),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
	}, jo = Symbol.toStringTag;
})), Po, Fo, Io, Lo = o((() => {
	B(), mo(), Oo(), yo(), No(), Po = {
		limit: 100,
		offset: 0,
		sortBy: {
			column: "name",
			order: "asc"
		}
	}, Fo = {
		cacheControl: "3600",
		contentType: "text/plain;charset=UTF-8",
		upsert: !1
	}, Io = class {
		constructor(e, t = {}, n, r) {
			this.shouldThrowOnError = !1, this.url = e, this.headers = t, this.bucketId = n, this.fetch = ho(r);
		}
		throwOnError() {
			return this.shouldThrowOnError = !0, this;
		}
		uploadOrUpdate(e, t, n, r) {
			return z(this, void 0, void 0, function* () {
				try {
					let i, a = Object.assign(Object.assign({}, Fo), r), o = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(a.upsert) }), s = a.metadata;
					typeof Blob < "u" && n instanceof Blob ? (i = new FormData(), i.append("cacheControl", a.cacheControl), s && i.append("metadata", this.encodeMetadata(s)), i.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (i = n, i.append("cacheControl", a.cacheControl), s && i.append("metadata", this.encodeMetadata(s))) : (i = n, o["cache-control"] = `max-age=${a.cacheControl}`, o["content-type"] = a.contentType, s && (o["x-metadata"] = this.toBase64(this.encodeMetadata(s)))), r?.headers && (o = Object.assign(Object.assign({}, o), r.headers));
					let c = this._removeEmptyFolders(t), l = this._getFinalPath(c), u = yield (e == "PUT" ? So : G)(this.fetch, `${this.url}/object/${l}`, i, Object.assign({ headers: o }, a?.duplex ? { duplex: a.duplex } : {}));
					return {
						data: {
							path: c,
							id: u.Id,
							fullPath: u.Key
						},
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		upload(e, t, n) {
			return z(this, void 0, void 0, function* () {
				return this.uploadOrUpdate("POST", e, t, n);
			});
		}
		uploadToSignedUrl(e, t, n, r) {
			return z(this, void 0, void 0, function* () {
				let i = this._removeEmptyFolders(e), a = this._getFinalPath(i), o = new URL(this.url + `/object/upload/sign/${a}`);
				o.searchParams.set("token", t);
				try {
					let e, t = Object.assign({ upsert: Fo.upsert }, r), a = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(t.upsert) });
					return typeof Blob < "u" && n instanceof Blob ? (e = new FormData(), e.append("cacheControl", t.cacheControl), e.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (e = n, e.append("cacheControl", t.cacheControl)) : (e = n, a["cache-control"] = `max-age=${t.cacheControl}`, a["content-type"] = t.contentType), {
						data: {
							path: i,
							fullPath: (yield So(this.fetch, o.toString(), e, { headers: a })).Key
						},
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		createSignedUploadUrl(e, t) {
			return z(this, void 0, void 0, function* () {
				try {
					let n = this._getFinalPath(e), r = Object.assign({}, this.headers);
					t?.upsert && (r["x-upsert"] = "true");
					let i = yield G(this.fetch, `${this.url}/object/upload/sign/${n}`, {}, { headers: r }), a = new URL(this.url + i.url), o = a.searchParams.get("token");
					if (!o) throw new uo("No token returned by API");
					return {
						data: {
							signedUrl: a.toString(),
							path: e,
							token: o
						},
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		update(e, t, n) {
			return z(this, void 0, void 0, function* () {
				return this.uploadOrUpdate("PUT", e, t, n);
			});
		}
		move(e, t, n) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield G(this.fetch, `${this.url}/object/move`, {
							bucketId: this.bucketId,
							sourceKey: e,
							destinationKey: t,
							destinationBucket: n?.destinationBucket
						}, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		copy(e, t, n) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: { path: (yield G(this.fetch, `${this.url}/object/copy`, {
							bucketId: this.bucketId,
							sourceKey: e,
							destinationKey: t,
							destinationBucket: n?.destinationBucket
						}, { headers: this.headers })).Key },
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		createSignedUrl(e, t, n) {
			return z(this, void 0, void 0, function* () {
				try {
					let r = this._getFinalPath(e), i = yield G(this.fetch, `${this.url}/object/sign/${r}`, Object.assign({ expiresIn: t }, n?.transform ? { transform: n.transform } : {}), { headers: this.headers }), a = n?.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
					return i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${a}`) }, {
						data: i,
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		createSignedUrls(e, t, n) {
			return z(this, void 0, void 0, function* () {
				try {
					let r = yield G(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
						expiresIn: t,
						paths: e
					}, { headers: this.headers }), i = n?.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
					return {
						data: r.map((e) => Object.assign(Object.assign({}, e), { signedUrl: e.signedURL ? encodeURI(`${this.url}${e.signedURL}${i}`) : null })),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		download(e, t) {
			let n = t?.transform === void 0 ? "object" : "render/image/authenticated", r = this.transformOptsToQueryString(t?.transform || {}), i = r ? `?${r}` : "", a = this._getFinalPath(e);
			return new Mo(() => xo(this.fetch, `${this.url}/${n}/${a}${i}`, {
				headers: this.headers,
				noResolveJson: !0
			}), this.shouldThrowOnError);
		}
		info(e) {
			return z(this, void 0, void 0, function* () {
				let t = this._getFinalPath(e);
				try {
					let e = yield xo(this.fetch, `${this.url}/object/info/${t}`, { headers: this.headers });
					return {
						data: _o(e),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		exists(e) {
			return z(this, void 0, void 0, function* () {
				let t = this._getFinalPath(e);
				try {
					return yield Co(this.fetch, `${this.url}/object/${t}`, { headers: this.headers }), {
						data: !0,
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e) && e instanceof po) {
						let t = e.originalError;
						if ([400, 404].includes(t?.status)) return {
							data: !1,
							error: e
						};
					}
					throw e;
				}
			});
		}
		getPublicUrl(e, t) {
			let n = this._getFinalPath(e), r = [], i = t?.download ? `download=${t.download === !0 ? "" : t.download}` : "";
			i !== "" && r.push(i);
			let a = t?.transform === void 0 ? "object" : "render/image", o = this.transformOptsToQueryString(t?.transform || {});
			o !== "" && r.push(o);
			let s = r.join("&");
			return s !== "" && (s = `?${s}`), { data: { publicUrl: encodeURI(`${this.url}/${a}/public/${n}${s}`) } };
		}
		remove(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield wo(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		list(e, t, n) {
			return z(this, void 0, void 0, function* () {
				try {
					let r = Object.assign(Object.assign(Object.assign({}, Po), t), { prefix: e || "" });
					return {
						data: yield G(this.fetch, `${this.url}/object/list/${this.bucketId}`, r, { headers: this.headers }, n),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		listV2(e, t) {
			return z(this, void 0, void 0, function* () {
				try {
					let n = Object.assign({}, e);
					return {
						data: yield G(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, n, { headers: this.headers }, t),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		encodeMetadata(e) {
			return JSON.stringify(e);
		}
		toBase64(e) {
			return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
		}
		_getFinalPath(e) {
			return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
		}
		_removeEmptyFolders(e) {
			return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
		}
		transformOptsToQueryString(e) {
			let t = [];
			return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&");
		}
	};
})), Ro, zo = o((() => {
	Ro = "2.76.1";
})), Bo, Vo = o((() => {
	zo(), Bo = { "X-Client-Info": `storage-js/${Ro}` };
})), Ho, Uo = o((() => {
	B(), Vo(), mo(), Oo(), yo(), Ho = class {
		constructor(e, t = {}, n, r) {
			this.shouldThrowOnError = !1;
			let i = new URL(e);
			r?.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase.")), this.url = i.href.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Bo), t), this.fetch = ho(n);
		}
		throwOnError() {
			return this.shouldThrowOnError = !0, this;
		}
		listBuckets() {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield xo(this.fetch, `${this.url}/bucket`, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		getBucket(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield xo(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		createBucket(e) {
			return z(this, arguments, void 0, function* (e, t = { public: !1 }) {
				try {
					return {
						data: yield G(this.fetch, `${this.url}/bucket`, {
							id: e,
							name: e,
							type: t.type,
							public: t.public,
							file_size_limit: t.fileSizeLimit,
							allowed_mime_types: t.allowedMimeTypes
						}, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		updateBucket(e, t) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield So(this.fetch, `${this.url}/bucket/${e}`, {
							id: e,
							name: e,
							public: t.public,
							file_size_limit: t.fileSizeLimit,
							allowed_mime_types: t.allowedMimeTypes
						}, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		emptyBucket(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield G(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		deleteBucket(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield wo(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
	};
})), Wo, Go = o((() => {
	B(), Vo(), mo(), Oo(), yo(), Wo = class {
		constructor(e, t = {}, n) {
			this.shouldThrowOnError = !1, this.url = e.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Bo), t), this.fetch = ho(n);
		}
		throwOnError() {
			return this.shouldThrowOnError = !0, this;
		}
		createBucket(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield G(this.fetch, `${this.url}/bucket`, { name: e }, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		listBuckets(e) {
			return z(this, void 0, void 0, function* () {
				try {
					let t = new URLSearchParams();
					e?.limit !== void 0 && t.set("limit", e.limit.toString()), e?.offset !== void 0 && t.set("offset", e.offset.toString()), e?.sortColumn && t.set("sortColumn", e.sortColumn), e?.sortOrder && t.set("sortOrder", e.sortOrder), e?.search && t.set("search", e.search);
					let n = t.toString(), r = n ? `${this.url}/bucket?${n}` : `${this.url}/bucket`, i = yield xo(this.fetch, r, { headers: this.headers });
					return {
						data: Array.isArray(i) ? i.filter((e) => e.type === "ANALYTICS") : [],
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		deleteBucket(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield wo(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (W(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
	};
})), Ko, qo = o((() => {
	zo(), Ko = {
		"X-Client-Info": `storage-js/${Ro}`,
		"Content-Type": "application/json"
	};
}));
// node_modules/.pnpm/@supabase+storage-js@2.76.1/node_modules/@supabase/storage-js/dist/module/lib/vectors/errors.js
function K(e) {
	return typeof e == "object" && !!e && "__isStorageVectorsError" in e;
}
var Jo, Yo, Xo, Zo, Qo = o((() => {
	Jo = class extends Error {
		constructor(e) {
			super(e), this.__isStorageVectorsError = !0, this.name = "StorageVectorsError";
		}
	}, Yo = class extends Jo {
		constructor(e, t, n) {
			super(e), this.name = "StorageVectorsApiError", this.status = t, this.statusCode = n;
		}
		toJSON() {
			return {
				name: this.name,
				message: this.message,
				status: this.status,
				statusCode: this.statusCode
			};
		}
	}, Xo = class extends Jo {
		constructor(e, t) {
			super(e), this.name = "StorageVectorsUnknownError", this.originalError = t;
		}
	}, (function(e) {
		e.InternalError = "InternalError", e.S3VectorConflictException = "S3VectorConflictException", e.S3VectorNotFoundException = "S3VectorNotFoundException", e.S3VectorBucketNotEmpty = "S3VectorBucketNotEmpty", e.S3VectorMaxBucketsExceeded = "S3VectorMaxBucketsExceeded", e.S3VectorMaxIndexesExceeded = "S3VectorMaxIndexesExceeded";
	})(Zo ||= {});
})), $o, es, ts = o((() => {
	$o = (e) => {
		let t;
		return t = e || (typeof fetch > "u" ? (...e) => Promise.resolve().then(() => (Ki(), Ri)).then(({ default: t }) => t(...e)) : fetch), (...e) => t(...e);
	}, es = (e) => {
		if (typeof e != "object" || !e) return !1;
		let t = Object.getPrototypeOf(e);
		return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
	};
}));
// node_modules/.pnpm/@supabase+storage-js@2.76.1/node_modules/@supabase/storage-js/dist/module/lib/vectors/fetch.js
function ns(e, t, n, r, i, a) {
	return z(this, void 0, void 0, function* () {
		return new Promise((o, s) => {
			e(n, as(t, r, i, a)).then((e) => {
				if (!e.ok) throw e;
				if (r?.noResolveJson) return e;
				let t = e.headers.get("content-type");
				return !t || !t.includes("application/json") ? {} : e.json();
			}).then((e) => o(e)).catch((e) => is(e, s, r));
		});
	});
}
function q(e, t, n, r, i) {
	return z(this, void 0, void 0, function* () {
		return ns(e, "POST", t, r, i, n);
	});
}
var rs, is, as, os = o((() => {
	B(), Qo(), ts(), rs = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e), is = (e, t, n) => z(void 0, void 0, void 0, function* () {
		if (e && typeof e == "object" && "status" in e && "ok" in e && typeof e.status == "number" && !n?.noResolveJson) {
			let n = e.status || 500, r = e;
			if (typeof r.json == "function") r.json().then((e) => {
				let r = e?.statusCode || e?.code || n + "";
				t(new Yo(rs(e), n, r));
			}).catch(() => {
				let e = n + "", i = r.statusText || `HTTP ${n} error`;
				t(new Yo(i, n, e));
			});
			else {
				let e = n + "", i = r.statusText || `HTTP ${n} error`;
				t(new Yo(i, n, e));
			}
		} else t(new Xo(rs(e), e));
	}), as = (e, t, n, r) => {
		let i = {
			method: e,
			headers: t?.headers || {}
		};
		return e === "GET" || !r ? i : (es(r) ? (i.headers = Object.assign({ "Content-Type": "application/json" }, t?.headers), i.body = JSON.stringify(r)) : i.body = r, Object.assign(Object.assign({}, i), n));
	};
})), ss, cs = o((() => {
	B(), qo(), Qo(), os(), ts(), ss = class {
		constructor(e, t = {}, n) {
			this.shouldThrowOnError = !1, this.url = e.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Ko), t), this.fetch = $o(n);
		}
		throwOnError() {
			return this.shouldThrowOnError = !0, this;
		}
		createIndex(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: (yield q(this.fetch, `${this.url}/CreateIndex`, e, { headers: this.headers })) || {},
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		getIndex(e, t) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield q(this.fetch, `${this.url}/GetIndex`, {
							vectorBucketName: e,
							indexName: t
						}, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		listIndexes(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield q(this.fetch, `${this.url}/ListIndexes`, e, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		deleteIndex(e, t) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: (yield q(this.fetch, `${this.url}/DeleteIndex`, {
							vectorBucketName: e,
							indexName: t
						}, { headers: this.headers })) || {},
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
	};
})), ls, us = o((() => {
	B(), qo(), Qo(), os(), ts(), ls = class {
		constructor(e, t = {}, n) {
			this.shouldThrowOnError = !1, this.url = e.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Ko), t), this.fetch = $o(n);
		}
		throwOnError() {
			return this.shouldThrowOnError = !0, this;
		}
		putVectors(e) {
			return z(this, void 0, void 0, function* () {
				try {
					if (e.vectors.length < 1 || e.vectors.length > 500) throw Error("Vector batch size must be between 1 and 500 items");
					return {
						data: (yield q(this.fetch, `${this.url}/PutVectors`, e, { headers: this.headers })) || {},
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		getVectors(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield q(this.fetch, `${this.url}/GetVectors`, e, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		listVectors(e) {
			return z(this, void 0, void 0, function* () {
				try {
					if (e.segmentCount !== void 0) {
						if (e.segmentCount < 1 || e.segmentCount > 16) throw Error("segmentCount must be between 1 and 16");
						if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)) throw Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`);
					}
					return {
						data: yield q(this.fetch, `${this.url}/ListVectors`, e, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		queryVectors(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield q(this.fetch, `${this.url}/QueryVectors`, e, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		deleteVectors(e) {
			return z(this, void 0, void 0, function* () {
				try {
					if (e.keys.length < 1 || e.keys.length > 500) throw Error("Keys batch size must be between 1 and 500 items");
					return {
						data: (yield q(this.fetch, `${this.url}/DeleteVectors`, e, { headers: this.headers })) || {},
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
	};
})), ds, fs = o((() => {
	B(), qo(), Qo(), os(), ts(), ds = class {
		constructor(e, t = {}, n) {
			this.shouldThrowOnError = !1, this.url = e.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Ko), t), this.fetch = $o(n);
		}
		throwOnError() {
			return this.shouldThrowOnError = !0, this;
		}
		createBucket(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: (yield q(this.fetch, `${this.url}/CreateVectorBucket`, { vectorBucketName: e }, { headers: this.headers })) || {},
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		getBucket(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: yield q(this.fetch, `${this.url}/GetVectorBucket`, { vectorBucketName: e }, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		listBuckets() {
			return z(this, arguments, void 0, function* (e = {}) {
				try {
					return {
						data: yield q(this.fetch, `${this.url}/ListVectorBuckets`, e, { headers: this.headers }),
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		deleteBucket(e) {
			return z(this, void 0, void 0, function* () {
				try {
					return {
						data: (yield q(this.fetch, `${this.url}/DeleteVectorBucket`, { vectorBucketName: e }, { headers: this.headers })) || {},
						error: null
					};
				} catch (e) {
					if (this.shouldThrowOnError) throw e;
					if (K(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
	};
})), ps, ms, hs, gs = o((() => {
	B(), cs(), us(), fs(), ps = class extends ds {
		constructor(e, t = {}) {
			super(e, t.headers || {}, t.fetch);
		}
		from(e) {
			return new ms(this.url, this.headers, e, this.fetch);
		}
	}, ms = class extends ss {
		constructor(e, t, n, r) {
			super(e, t, r), this.vectorBucketName = n;
		}
		createIndex(e) {
			let t = Object.create(null, { createIndex: { get: () => super.createIndex } });
			return z(this, void 0, void 0, function* () {
				return t.createIndex.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName }));
			});
		}
		listIndexes() {
			let e = Object.create(null, { listIndexes: { get: () => super.listIndexes } });
			return z(this, arguments, void 0, function* (t = {}) {
				return e.listIndexes.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName }));
			});
		}
		getIndex(e) {
			let t = Object.create(null, { getIndex: { get: () => super.getIndex } });
			return z(this, void 0, void 0, function* () {
				return t.getIndex.call(this, this.vectorBucketName, e);
			});
		}
		deleteIndex(e) {
			let t = Object.create(null, { deleteIndex: { get: () => super.deleteIndex } });
			return z(this, void 0, void 0, function* () {
				return t.deleteIndex.call(this, this.vectorBucketName, e);
			});
		}
		index(e) {
			return new hs(this.url, this.headers, this.vectorBucketName, e, this.fetch);
		}
	}, hs = class extends ls {
		constructor(e, t, n, r, i) {
			super(e, t, i), this.vectorBucketName = n, this.indexName = r;
		}
		putVectors(e) {
			let t = Object.create(null, { putVectors: { get: () => super.putVectors } });
			return z(this, void 0, void 0, function* () {
				return t.putVectors.call(this, Object.assign(Object.assign({}, e), {
					vectorBucketName: this.vectorBucketName,
					indexName: this.indexName
				}));
			});
		}
		getVectors(e) {
			let t = Object.create(null, { getVectors: { get: () => super.getVectors } });
			return z(this, void 0, void 0, function* () {
				return t.getVectors.call(this, Object.assign(Object.assign({}, e), {
					vectorBucketName: this.vectorBucketName,
					indexName: this.indexName
				}));
			});
		}
		listVectors() {
			let e = Object.create(null, { listVectors: { get: () => super.listVectors } });
			return z(this, arguments, void 0, function* (t = {}) {
				return e.listVectors.call(this, Object.assign(Object.assign({}, t), {
					vectorBucketName: this.vectorBucketName,
					indexName: this.indexName
				}));
			});
		}
		queryVectors(e) {
			let t = Object.create(null, { queryVectors: { get: () => super.queryVectors } });
			return z(this, void 0, void 0, function* () {
				return t.queryVectors.call(this, Object.assign(Object.assign({}, e), {
					vectorBucketName: this.vectorBucketName,
					indexName: this.indexName
				}));
			});
		}
		deleteVectors(e) {
			let t = Object.create(null, { deleteVectors: { get: () => super.deleteVectors } });
			return z(this, void 0, void 0, function* () {
				return t.deleteVectors.call(this, Object.assign(Object.assign({}, e), {
					vectorBucketName: this.vectorBucketName,
					indexName: this.indexName
				}));
			});
		}
	};
})), _s = o((() => {
	gs(), fs(), cs(), us(), Qo(), ts();
})), vs, ys = o((() => {
	Lo(), Uo(), Go(), _s(), vs = class extends Ho {
		constructor(e, t = {}, n, r) {
			super(e, t, n, r);
		}
		from(e) {
			return new Io(this.url, this.headers, e, this.fetch);
		}
		get vectors() {
			return new ps(this.url + "/vector", {
				headers: this.headers,
				fetch: this.fetch
			});
		}
		get analytics() {
			return new Wo(this.url + "/iceberg", this.headers, this.fetch);
		}
	};
})), bs = o((() => {
	ys(), Go(), mo(), _s();
})), xs, Ss = o((() => {
	xs = "2.76.1";
})), Cs, ws, Ts, Es, Ds, Os, ks = o((() => {
	Ss(), Cs = "", Cs = typeof Deno < "u" ? "deno" : typeof document < "u" ? "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? "react-native" : "node", ws = { "X-Client-Info": `supabase-js-${Cs}/${xs}` }, Ts = { headers: ws }, Es = { schema: "public" }, Ds = {
		autoRefreshToken: !0,
		persistSession: !0,
		detectSessionInUrl: !0,
		flowType: "implicit"
	}, Os = {};
})), As, js, Ms, Ns = o((() => {
	Ki(), As = (e) => {
		let t;
		return t = e || (typeof fetch > "u" ? Hi : fetch), (...e) => t(...e);
	}, js = () => typeof Headers > "u" ? Ui : Headers, Ms = (e, t, n) => {
		let r = As(n), i = js();
		return async (n, a) => {
			let o = await t() ?? e, s = new i(a?.headers);
			return s.has("apikey") || s.set("apikey", e), s.has("Authorization") || s.set("Authorization", `Bearer ${o}`), r(n, Object.assign(Object.assign({}, a), { headers: s }));
		};
	};
}));
// node_modules/.pnpm/@supabase+supabase-js@2.76.1/node_modules/@supabase/supabase-js/dist/module/lib/helpers.js
function Ps(e) {
	return e.endsWith("/") ? e : e + "/";
}
function Fs(e, t) {
	let { db: n, auth: r, realtime: i, global: a } = e, { db: o, auth: s, realtime: c, global: l } = t, u = {
		db: Object.assign(Object.assign({}, o), n),
		auth: Object.assign(Object.assign({}, s), r),
		realtime: Object.assign(Object.assign({}, c), i),
		storage: {},
		global: Object.assign(Object.assign(Object.assign({}, l), a), { headers: Object.assign(Object.assign({}, l?.headers ?? {}), a?.headers ?? {}) }),
		accessToken: async () => ""
	};
	return e.accessToken ? u.accessToken = e.accessToken : delete u.accessToken, u;
}
function Is(e) {
	let t = e?.trim();
	if (!t) throw Error("supabaseUrl is required.");
	if (!t.match(/^https?:\/\//i)) throw Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
	try {
		return new URL(Ps(t));
	} catch {
		throw Error("Invalid supabaseUrl: Provided URL is malformed.");
	}
}
var Ls = o((() => {})), Rs, zs = o((() => {
	Rs = "2.76.1";
})), Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js = o((() => {
	zs(), Bs = 3e4, Vs = 3 * Bs, Hs = "http://localhost:9999", Us = "supabase.auth.token", Ws = { "X-Client-Info": `gotrue-js/${Rs}` }, Gs = "X-Supabase-Api-Version", Ks = { "2024-01-01": {
		timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
		name: "2024-01-01"
	} }, qs = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
}));
// node_modules/.pnpm/@supabase+auth-js@2.76.1/node_modules/@supabase/auth-js/dist/module/lib/errors.js
function J(e) {
	return typeof e == "object" && !!e && "__isAuthError" in e;
}
function Ys(e) {
	return J(e) && e.name === "AuthApiError";
}
function Xs(e) {
	return J(e) && e.name === "AuthSessionMissingError";
}
function Zs(e) {
	return J(e) && e.name === "AuthImplicitGrantRedirectError";
}
function Qs(e) {
	return J(e) && e.name === "AuthRetryableFetchError";
}
function $s(e) {
	return J(e) && e.name === "AuthWeakPasswordError";
}
var ec, tc, nc, rc, ic, ac, oc, sc, cc, lc, uc, dc, fc = o((() => {
	ec = class extends Error {
		constructor(e, t, n) {
			super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = n;
		}
	}, tc = class extends ec {
		constructor(e, t, n) {
			super(e, t, n), this.name = "AuthApiError", this.status = t, this.code = n;
		}
	}, nc = class extends ec {
		constructor(e, t) {
			super(e), this.name = "AuthUnknownError", this.originalError = t;
		}
	}, rc = class extends ec {
		constructor(e, t, n, r) {
			super(e, n, r), this.name = t, this.status = n;
		}
	}, ic = class extends rc {
		constructor() {
			super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
		}
	}, ac = class extends rc {
		constructor() {
			super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
		}
	}, oc = class extends rc {
		constructor(e) {
			super(e, "AuthInvalidCredentialsError", 400, void 0);
		}
	}, sc = class extends rc {
		constructor(e, t = null) {
			super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t;
		}
		toJSON() {
			return {
				name: this.name,
				message: this.message,
				status: this.status,
				details: this.details
			};
		}
	}, cc = class extends rc {
		constructor(e, t = null) {
			super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t;
		}
		toJSON() {
			return {
				name: this.name,
				message: this.message,
				status: this.status,
				details: this.details
			};
		}
	}, lc = class extends rc {
		constructor(e, t) {
			super(e, "AuthRetryableFetchError", t, void 0);
		}
	}, uc = class extends rc {
		constructor(e, t, n) {
			super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = n;
		}
	}, dc = class extends rc {
		constructor(e) {
			super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
		}
	};
}));
// node_modules/.pnpm/@supabase+auth-js@2.76.1/node_modules/@supabase/auth-js/dist/module/lib/base64url.js
function pc(e, t, n) {
	if (e !== null) for (t.queue = t.queue << 8 | e, t.queuedBits += 8; t.queuedBits >= 6;) {
		let e = t.queue >> t.queuedBits - 6 & 63;
		n(Sc[e]), t.queuedBits -= 6;
	}
	else if (t.queuedBits > 0) for (t.queue <<= 6 - t.queuedBits, t.queuedBits = 6; t.queuedBits >= 6;) {
		let e = t.queue >> t.queuedBits - 6 & 63;
		n(Sc[e]), t.queuedBits -= 6;
	}
}
function mc(e, t, n) {
	let r = wc[e];
	if (r > -1) for (t.queue = t.queue << 6 | r, t.queuedBits += 6; t.queuedBits >= 8;) n(t.queue >> t.queuedBits - 8 & 255), t.queuedBits -= 8;
	else if (r === -2) return;
	else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
}
function hc(e) {
	let t = [], n = (e) => {
		t.push(String.fromCodePoint(e));
	}, r = {
		utf8seq: 0,
		codepoint: 0
	}, i = {
		queue: 0,
		queuedBits: 0
	}, a = (e) => {
		vc(e, r, n);
	};
	for (let t = 0; t < e.length; t += 1) mc(e.charCodeAt(t), i, a);
	return t.join("");
}
function gc(e, t) {
	if (e <= 127) t(e);
	else if (e <= 2047) t(192 | e >> 6), t(128 | e & 63);
	else if (e <= 65535) t(224 | e >> 12), t(128 | e >> 6 & 63), t(128 | e & 63);
	else if (e <= 1114111) t(240 | e >> 18), t(128 | e >> 12 & 63), t(128 | e >> 6 & 63), t(128 | e & 63);
	else throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function _c(e, t) {
	for (let n = 0; n < e.length; n += 1) {
		let r = e.charCodeAt(n);
		if (r > 55295 && r <= 56319) {
			let t = (r - 55296) * 1024 & 65535;
			r = (e.charCodeAt(n + 1) - 56320 & 65535 | t) + 65536, n += 1;
		}
		gc(r, t);
	}
}
function vc(e, t, n) {
	if (t.utf8seq === 0) {
		if (e <= 127) {
			n(e);
			return;
		}
		for (let n = 1; n < 6; n += 1) if (!(e >> 7 - n & 1)) {
			t.utf8seq = n;
			break;
		}
		if (t.utf8seq === 2) t.codepoint = e & 31;
		else if (t.utf8seq === 3) t.codepoint = e & 15;
		else if (t.utf8seq === 4) t.codepoint = e & 7;
		else throw Error("Invalid UTF-8 sequence");
		--t.utf8seq;
	} else if (t.utf8seq > 0) {
		if (e <= 127) throw Error("Invalid UTF-8 sequence");
		t.codepoint = t.codepoint << 6 | e & 63, --t.utf8seq, t.utf8seq === 0 && n(t.codepoint);
	}
}
function yc(e) {
	let t = [], n = {
		queue: 0,
		queuedBits: 0
	}, r = (e) => {
		t.push(e);
	};
	for (let t = 0; t < e.length; t += 1) mc(e.charCodeAt(t), n, r);
	return new Uint8Array(t);
}
function bc(e) {
	let t = [];
	return _c(e, (e) => t.push(e)), new Uint8Array(t);
}
function xc(e) {
	let t = [], n = {
		queue: 0,
		queuedBits: 0
	}, r = (e) => {
		t.push(e);
	};
	return e.forEach((e) => pc(e, n, r)), pc(null, n, r), t.join("");
}
var Sc, Cc, wc, Tc = o((() => {
	Sc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Cc = " 	\n\r=".split(""), wc = (() => {
		let e = Array(128);
		for (let t = 0; t < e.length; t += 1) e[t] = -1;
		for (let t = 0; t < Cc.length; t += 1) e[Cc[t].charCodeAt(0)] = -2;
		for (let t = 0; t < Sc.length; t += 1) e[Sc[t].charCodeAt(0)] = t;
		return e;
	})();
}));
// node_modules/.pnpm/@supabase+auth-js@2.76.1/node_modules/@supabase/auth-js/dist/module/lib/helpers.js
function Ec(e) {
	return Math.round(Date.now() / 1e3) + e;
}
function Dc() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
		let t = Math.random() * 16 | 0;
		return (e == "x" ? t : t & 3 | 8).toString(16);
	});
}
function Oc(e) {
	let t = {}, n = new URL(e);
	if (n.hash && n.hash[0] === "#") try {
		new URLSearchParams(n.hash.substring(1)).forEach((e, n) => {
			t[n] = e;
		});
	} catch {}
	return n.searchParams.forEach((e, n) => {
		t[n] = e;
	}), t;
}
function kc(e) {
	let t = e.split(".");
	if (t.length !== 3) throw new dc("Invalid JWT structure");
	for (let e = 0; e < t.length; e++) if (!qs.test(t[e])) throw new dc("JWT not in base64url format");
	return {
		header: JSON.parse(hc(t[0])),
		payload: JSON.parse(hc(t[1])),
		signature: yc(t[2]),
		raw: {
			header: t[0],
			payload: t[1]
		}
	};
}
async function Ac(e) {
	return await new Promise((t) => {
		setTimeout(() => t(null), e);
	});
}
function jc(e, t) {
	return new Promise((n, r) => {
		(async () => {
			for (let i = 0; i < 1e400; i++) try {
				let r = await e(i);
				if (!t(i, null, r)) {
					n(r);
					return;
				}
			} catch (e) {
				if (!t(i, e)) {
					r(e);
					return;
				}
			}
		})();
	});
}
function Mc(e) {
	return ("0" + e.toString(16)).substr(-2);
}
function Nc() {
	let e = /* @__PURE__ */ new Uint32Array(56);
	if (typeof crypto > "u") {
		let e = "";
		for (let t = 0; t < 56; t++) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~".charAt(Math.floor(Math.random() * 66));
		return e;
	}
	return crypto.getRandomValues(e), Array.from(e, Mc).join("");
}
async function Pc(e) {
	let t = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", t), r = new Uint8Array(n);
	return Array.from(r).map((e) => String.fromCharCode(e)).join("");
}
async function Fc(e) {
	if (typeof crypto > "u" || crypto.subtle === void 0 || typeof TextEncoder > "u") return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
	let t = await Pc(e);
	return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Ic(e, t, n = !1) {
	let r = Nc(), i = r;
	n && (i += "/PASSWORD_RECOVERY"), await qc(e, `${t}-code-verifier`, i);
	let a = await Fc(r);
	return [a, r === a ? "plain" : "s256"];
}
function Lc(e) {
	let t = e.headers.get(Gs);
	if (!t || !t.match(Zc)) return null;
	try {
		return /* @__PURE__ */ new Date(`${t}T00:00:00.0Z`);
	} catch {
		return null;
	}
}
function Rc(e) {
	if (!e) throw Error("Missing exp claim");
	if (e <= Math.floor(Date.now() / 1e3)) throw Error("JWT has expired");
}
function zc(e) {
	switch (e) {
		case "RS256": return {
			name: "RSASSA-PKCS1-v1_5",
			hash: { name: "SHA-256" }
		};
		case "ES256": return {
			name: "ECDSA",
			namedCurve: "P-256",
			hash: { name: "SHA-256" }
		};
		default: throw Error("Invalid alg claim");
	}
}
function Bc(e) {
	if (!Qc.test(e)) throw Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function Vc() {
	return new Proxy({}, {
		get: (e, t) => {
			if (t === "__isUserNotAvailableProxy") return !0;
			if (typeof t == "symbol") {
				let e = t.toString();
				if (e === "Symbol(Symbol.toPrimitive)" || e === "Symbol(Symbol.toStringTag)" || e === "Symbol(util.inspect.custom)") return;
			}
			throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`);
		},
		set: (e, t) => {
			throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
		},
		deleteProperty: (e, t) => {
			throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
		}
	});
}
function Hc(e) {
	return JSON.parse(JSON.stringify(e));
}
var Y, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c = o((() => {
	Js(), fc(), Tc(), Y = () => typeof window < "u" && typeof document < "u", Uc = {
		tested: !1,
		writable: !1
	}, Wc = () => {
		if (!Y()) return !1;
		try {
			if (typeof globalThis.localStorage != "object") return !1;
		} catch {
			return !1;
		}
		if (Uc.tested) return Uc.writable;
		let e = `lswt-${Math.random()}${Math.random()}`;
		try {
			globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), Uc.tested = !0, Uc.writable = !0;
		} catch {
			Uc.tested = !0, Uc.writable = !1;
		}
		return Uc.writable;
	}, Gc = (e) => {
		let t;
		return t = e || (typeof fetch > "u" ? (...e) => Promise.resolve().then(() => (Ki(), Ri)).then(({ default: t }) => t(...e)) : fetch), (...e) => t(...e);
	}, Kc = (e) => typeof e == "object" && !!e && "status" in e && "ok" in e && "json" in e && typeof e.json == "function", qc = async (e, t, n) => {
		await e.setItem(t, JSON.stringify(n));
	}, Jc = async (e, t) => {
		let n = await e.getItem(t);
		if (!n) return null;
		try {
			return JSON.parse(n);
		} catch {
			return n;
		}
	}, Yc = async (e, t) => {
		await e.removeItem(t);
	}, Xc = class e {
		constructor() {
			this.promise = new e.promiseConstructor((e, t) => {
				this.resolve = e, this.reject = t;
			});
		}
	}, Xc.promiseConstructor = Promise, Zc = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i, Qc = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
}));
// node_modules/.pnpm/@supabase+auth-js@2.76.1/node_modules/@supabase/auth-js/dist/module/lib/fetch.js
async function el(e) {
	if (!Kc(e)) throw new lc(cl(e), 0);
	if (ll.includes(e.status)) throw new lc(cl(e), e.status);
	let t;
	try {
		t = await e.json();
	} catch (e) {
		throw new nc(cl(e), e);
	}
	let n, r = Lc(e);
	if (r && r.getTime() >= Ks["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? n = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (n = t.error_code), !n) {
		if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((e, t) => e && typeof t == "string", !0)) throw new uc(cl(t), e.status, t.weak_password.reasons);
	} else if (n === "weak_password") throw new uc(cl(t), e.status, t.weak_password?.reasons || []);
	else if (n === "session_not_found") throw new ic();
	throw new tc(cl(t), e.status || 500, n);
}
async function X(e, t, n, r) {
	let i = Object.assign({}, r?.headers);
	i["X-Supabase-Api-Version"] || (i[Gs] = Ks["2024-01-01"].name), r?.jwt && (i.Authorization = `Bearer ${r.jwt}`);
	let a = r?.query ?? {};
	r?.redirectTo && (a.redirect_to = r.redirectTo);
	let o = await tl(e, t, n + (Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : ""), {
		headers: i,
		noResolveJson: r?.noResolveJson
	}, {}, r?.body);
	return r?.xform ? r?.xform(o) : {
		data: Object.assign({}, o),
		error: null
	};
}
async function tl(e, t, n, r, i, a) {
	let o = ul(t, r, i, a), s;
	try {
		s = await e(n, Object.assign({}, o));
	} catch (e) {
		throw console.error(e), new lc(cl(e), 0);
	}
	if (s.ok || await el(s), r?.noResolveJson) return s;
	try {
		return await s.json();
	} catch (e) {
		await el(e);
	}
}
function Z(e) {
	let t = null;
	sl(e) && (t = Object.assign({}, e), e.expires_at || (t.expires_at = Ec(e.expires_in)));
	let n = e.user ?? e;
	return {
		data: {
			session: t,
			user: n
		},
		error: null
	};
}
function nl(e) {
	let t = Z(e);
	return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce((e, t) => e && typeof t == "string", !0) && (t.data.weak_password = e.weak_password), t;
}
function rl(e) {
	return {
		data: { user: e.user ?? e },
		error: null
	};
}
function il(e) {
	return {
		data: e,
		error: null
	};
}
function al(e) {
	let { action_link: t, email_otp: n, hashed_token: r, redirect_to: i, verification_type: a } = e, o = ri(e, [
		"action_link",
		"email_otp",
		"hashed_token",
		"redirect_to",
		"verification_type"
	]);
	return {
		data: {
			properties: {
				action_link: t,
				email_otp: n,
				hashed_token: r,
				redirect_to: i,
				verification_type: a
			},
			user: Object.assign({}, o)
		},
		error: null
	};
}
function ol(e) {
	return e;
}
function sl(e) {
	return e.access_token && e.refresh_token && e.expires_in;
}
var cl, ll, ul, dl = o((() => {
	B(), Js(), $c(), fc(), cl = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e), ll = [
		502,
		503,
		504
	], ul = (e, t, n, r) => {
		let i = {
			method: e,
			headers: t?.headers || {}
		};
		return e === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, t?.headers), i.body = JSON.stringify(r), Object.assign(Object.assign({}, i), n));
	};
})), fl, pl = o((() => {
	fl = [
		"global",
		"local",
		"others"
	];
})), ml, hl = o((() => {
	B(), dl(), $c(), pl(), fc(), ml = class {
		constructor({ url: e = "", headers: t = {}, fetch: n }) {
			this.url = e, this.headers = t, this.fetch = Gc(n), this.mfa = {
				listFactors: this._listFactors.bind(this),
				deleteFactor: this._deleteFactor.bind(this)
			}, this.oauth = {
				listClients: this._listOAuthClients.bind(this),
				createClient: this._createOAuthClient.bind(this),
				getClient: this._getOAuthClient.bind(this),
				deleteClient: this._deleteOAuthClient.bind(this),
				regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
			};
		}
		async signOut(e, t = fl[0]) {
			if (fl.indexOf(t) < 0) throw Error(`@supabase/auth-js: Parameter scope must be one of ${fl.join(", ")}`);
			try {
				return await X(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
					headers: this.headers,
					jwt: e,
					noResolveJson: !0
				}), {
					data: null,
					error: null
				};
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
		async inviteUserByEmail(e, t = {}) {
			try {
				return await X(this.fetch, "POST", `${this.url}/invite`, {
					body: {
						email: e,
						data: t.data
					},
					headers: this.headers,
					redirectTo: t.redirectTo,
					xform: rl
				});
			} catch (e) {
				if (J(e)) return {
					data: { user: null },
					error: e
				};
				throw e;
			}
		}
		async generateLink(e) {
			try {
				let { options: t } = e, n = ri(e, ["options"]), r = Object.assign(Object.assign({}, n), t);
				return "newEmail" in n && (r.new_email = n?.newEmail, delete r.newEmail), await X(this.fetch, "POST", `${this.url}/admin/generate_link`, {
					body: r,
					headers: this.headers,
					xform: al,
					redirectTo: t?.redirectTo
				});
			} catch (e) {
				if (J(e)) return {
					data: {
						properties: null,
						user: null
					},
					error: e
				};
				throw e;
			}
		}
		async createUser(e) {
			try {
				return await X(this.fetch, "POST", `${this.url}/admin/users`, {
					body: e,
					headers: this.headers,
					xform: rl
				});
			} catch (e) {
				if (J(e)) return {
					data: { user: null },
					error: e
				};
				throw e;
			}
		}
		async listUsers(e) {
			try {
				let t = {
					nextPage: null,
					lastPage: 0,
					total: 0
				}, n = await X(this.fetch, "GET", `${this.url}/admin/users`, {
					headers: this.headers,
					noResolveJson: !0,
					query: {
						page: (e?.page)?.toString() ?? "",
						per_page: (e?.perPage)?.toString() ?? ""
					},
					xform: ol
				});
				if (n.error) throw n.error;
				let r = await n.json(), i = n.headers.get("x-total-count") ?? 0, a = n.headers.get("link")?.split(",") ?? [];
				return a.length > 0 && (a.forEach((e) => {
					let n = parseInt(e.split(";")[0].split("=")[1].substring(0, 1)), r = JSON.parse(e.split(";")[1].split("=")[1]);
					t[`${r}Page`] = n;
				}), t.total = parseInt(i)), {
					data: Object.assign(Object.assign({}, r), t),
					error: null
				};
			} catch (e) {
				if (J(e)) return {
					data: { users: [] },
					error: e
				};
				throw e;
			}
		}
		async getUserById(e) {
			Bc(e);
			try {
				return await X(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
					headers: this.headers,
					xform: rl
				});
			} catch (e) {
				if (J(e)) return {
					data: { user: null },
					error: e
				};
				throw e;
			}
		}
		async updateUserById(e, t) {
			Bc(e);
			try {
				return await X(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
					body: t,
					headers: this.headers,
					xform: rl
				});
			} catch (e) {
				if (J(e)) return {
					data: { user: null },
					error: e
				};
				throw e;
			}
		}
		async deleteUser(e, t = !1) {
			Bc(e);
			try {
				return await X(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
					headers: this.headers,
					body: { should_soft_delete: t },
					xform: rl
				});
			} catch (e) {
				if (J(e)) return {
					data: { user: null },
					error: e
				};
				throw e;
			}
		}
		async _listFactors(e) {
			Bc(e.userId);
			try {
				let { data: t, error: n } = await X(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
					headers: this.headers,
					xform: (e) => ({
						data: { factors: e },
						error: null
					})
				});
				return {
					data: t,
					error: n
				};
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
		async _deleteFactor(e) {
			Bc(e.userId), Bc(e.id);
			try {
				return {
					data: await X(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, { headers: this.headers }),
					error: null
				};
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
		async _listOAuthClients(e) {
			try {
				let t = {
					nextPage: null,
					lastPage: 0,
					total: 0
				}, n = await X(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
					headers: this.headers,
					noResolveJson: !0,
					query: {
						page: (e?.page)?.toString() ?? "",
						per_page: (e?.perPage)?.toString() ?? ""
					},
					xform: ol
				});
				if (n.error) throw n.error;
				let r = await n.json(), i = n.headers.get("x-total-count") ?? 0, a = n.headers.get("link")?.split(",") ?? [];
				return a.length > 0 && (a.forEach((e) => {
					let n = parseInt(e.split(";")[0].split("=")[1].substring(0, 1)), r = JSON.parse(e.split(";")[1].split("=")[1]);
					t[`${r}Page`] = n;
				}), t.total = parseInt(i)), {
					data: Object.assign(Object.assign({}, r), t),
					error: null
				};
			} catch (e) {
				if (J(e)) return {
					data: { clients: [] },
					error: e
				};
				throw e;
			}
		}
		async _createOAuthClient(e) {
			try {
				return await X(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
					body: e,
					headers: this.headers,
					xform: (e) => ({
						data: e,
						error: null
					})
				});
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
		async _getOAuthClient(e) {
			try {
				return await X(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
					headers: this.headers,
					xform: (e) => ({
						data: e,
						error: null
					})
				});
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
		async _deleteOAuthClient(e) {
			try {
				return await X(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
					headers: this.headers,
					xform: (e) => ({
						data: e,
						error: null
					})
				});
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
		async _regenerateOAuthClientSecret(e) {
			try {
				return await X(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
					headers: this.headers,
					xform: (e) => ({
						data: e,
						error: null
					})
				});
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
	};
}));
// node_modules/.pnpm/@supabase+auth-js@2.76.1/node_modules/@supabase/auth-js/dist/module/lib/local-storage.js
function gl(e = {}) {
	return {
		getItem: (t) => e[t] || null,
		setItem: (t, n) => {
			e[t] = n;
		},
		removeItem: (t) => {
			delete e[t];
		}
	};
}
// node_modules/.pnpm/@supabase+auth-js@2.76.1/node_modules/@supabase/auth-js/dist/module/lib/locks.js
async function _l(e, t, n) {
	yl.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
	let r = new globalThis.AbortController();
	return t > 0 && setTimeout(() => {
		r.abort(), yl.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e);
	}, t), await Promise.resolve().then(() => globalThis.navigator.locks.request(e, t === 0 ? {
		mode: "exclusive",
		ifAvailable: !0
	} : {
		mode: "exclusive",
		signal: r.signal
	}, async (r) => {
		if (r) {
			yl.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, r.name);
			try {
				return await n();
			} finally {
				yl.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, r.name);
			}
		} else if (t === 0) throw yl.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new xl(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
		else {
			if (yl.debug) try {
				let e = await globalThis.navigator.locks.query();
				console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(e, null, "  "));
			} catch (e) {
				console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e);
			}
			return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await n();
		}
	}));
}
async function vl(e, t, n) {
	let r = Cl[e] ?? Promise.resolve(), i = Promise.race([r.catch(() => null), t >= 0 ? new Promise((n, r) => {
		setTimeout(() => {
			r(new Sl(`Acquring process lock with name "${e}" timed out`));
		}, t);
	}) : null].filter((e) => e)).catch((e) => {
		if (e && e.isAcquireTimeout) throw e;
		return null;
	}).then(async () => await n());
	return Cl[e] = i.catch(async (e) => {
		if (e && e.isAcquireTimeout) return await r, null;
		throw e;
	}), await i;
}
var yl, bl, xl, Sl, Cl, wl = o((() => {
	$c(), yl = { debug: !!(globalThis && Wc() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true") }, bl = class extends Error {
		constructor(e) {
			super(e), this.isAcquireTimeout = !0;
		}
	}, xl = class extends bl {}, Sl = class extends bl {}, Cl = {};
}));
// node_modules/.pnpm/@supabase+auth-js@2.76.1/node_modules/@supabase/auth-js/dist/module/lib/polyfills.js
function Tl() {
	if (typeof globalThis != "object") try {
		Object.defineProperty(Object.prototype, "__magic__", {
			get: function() {
				return this;
			},
			configurable: !0
		}), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
	} catch {
		typeof self < "u" && (self.globalThis = self);
	}
}
// node_modules/.pnpm/@supabase+auth-js@2.76.1/node_modules/@supabase/auth-js/dist/module/lib/web3/ethereum.js
function El(e) {
	if (!/^0x[a-fA-F0-9]{40}$/.test(e)) throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);
	return e.toLowerCase();
}
function Dl(e) {
	return parseInt(e, 16);
}
function Ol(e) {
	let t = new TextEncoder().encode(e);
	return "0x" + Array.from(t, (e) => e.toString(16).padStart(2, "0")).join("");
}
function kl(e) {
	let { chainId: t, domain: n, expirationTime: r, issuedAt: i = /* @__PURE__ */ new Date(), nonce: a, notBefore: o, requestId: s, resources: c, scheme: l, uri: u, version: d } = e;
	if (!Number.isInteger(t)) throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);
	if (!n) throw Error("@supabase/auth-js: Invalid SIWE message field \"domain\". Domain must be provided.");
	if (a && a.length < 8) throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);
	if (!u) throw Error("@supabase/auth-js: Invalid SIWE message field \"uri\". URI must be provided.");
	if (d !== "1") throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);
	if (e.statement?.includes("\n")) throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);
	let f = El(e.address), p = `${l ? `${l}://${n}` : n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement ? `${e.statement}\n` : ""}`, m = `URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a ? `\nNonce: ${a}` : ""}\nIssued At: ${i.toISOString()}`;
	if (r && (m += `\nExpiration Time: ${r.toISOString()}`), o && (m += `\nNot Before: ${o.toISOString()}`), s && (m += `\nRequest ID: ${s}`), c) {
		let e = "\nResources:";
		for (let t of c) {
			if (!t || typeof t != "string") throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);
			e += `\n- ${t}`;
		}
		m += e;
	}
	return `${p}\n${m}`;
}
// node_modules/.pnpm/@supabase+auth-js@2.76.1/node_modules/@supabase/auth-js/dist/module/lib/webauthn.errors.js
function Al({ error: e, options: t }) {
	let { publicKey: n } = t;
	if (!n) throw Error("options was missing required publicKey property");
	if (e.name === "AbortError") {
		if (t.signal instanceof AbortSignal) return new Q({
			message: "Registration ceremony was sent an abort signal",
			code: "ERROR_CEREMONY_ABORTED",
			cause: e
		});
	} else if (e.name === "ConstraintError") {
		if (n.authenticatorSelection?.requireResidentKey === !0) return new Q({
			message: "Discoverable credentials were required but no available authenticator supported it",
			code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
			cause: e
		});
		if (t.mediation === "conditional" && n.authenticatorSelection?.userVerification === "required") return new Q({
			message: "User verification was required during automatic registration but it could not be performed",
			code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
			cause: e
		});
		if (n.authenticatorSelection?.userVerification === "required") return new Q({
			message: "User verification was required but no available authenticator supported it",
			code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
			cause: e
		});
	} else if (e.name === "InvalidStateError") return new Q({
		message: "The authenticator was previously registered",
		code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
		cause: e
	});
	else if (e.name === "NotAllowedError") return new Q({
		message: e.message,
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
	else if (e.name === "NotSupportedError") return n.pubKeyCredParams.filter((e) => e.type === "public-key").length === 0 ? new Q({
		message: "No entry in pubKeyCredParams was of type \"public-key\"",
		code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
		cause: e
	}) : new Q({
		message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
		code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
		cause: e
	});
	else if (e.name === "SecurityError") {
		let t = window.location.hostname;
		if (!Rl(t)) return new Q({
			message: `${window.location.hostname} is an invalid domain`,
			code: "ERROR_INVALID_DOMAIN",
			cause: e
		});
		if (n.rp.id !== t) return new Q({
			message: `The RP ID "${n.rp.id}" is invalid for this domain`,
			code: "ERROR_INVALID_RP_ID",
			cause: e
		});
	} else if (e.name === "TypeError") {
		if (n.user.id.byteLength < 1 || n.user.id.byteLength > 64) return new Q({
			message: "User ID was not between 1 and 64 characters",
			code: "ERROR_INVALID_USER_ID_LENGTH",
			cause: e
		});
	} else if (e.name === "UnknownError") return new Q({
		message: "The authenticator was unable to process the specified options, or could not create a new credential",
		code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
		cause: e
	});
	return new Q({
		message: "a Non-Webauthn related error has occurred",
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
}
function jl({ error: e, options: t }) {
	let { publicKey: n } = t;
	if (!n) throw Error("options was missing required publicKey property");
	if (e.name === "AbortError") {
		if (t.signal instanceof AbortSignal) return new Q({
			message: "Authentication ceremony was sent an abort signal",
			code: "ERROR_CEREMONY_ABORTED",
			cause: e
		});
	} else if (e.name === "NotAllowedError") return new Q({
		message: e.message,
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
	else if (e.name === "SecurityError") {
		let t = window.location.hostname;
		if (!Rl(t)) return new Q({
			message: `${window.location.hostname} is an invalid domain`,
			code: "ERROR_INVALID_DOMAIN",
			cause: e
		});
		if (n.rpId !== t) return new Q({
			message: `The RP ID "${n.rpId}" is invalid for this domain`,
			code: "ERROR_INVALID_RP_ID",
			cause: e
		});
	} else if (e.name === "UnknownError") return new Q({
		message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
		code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
		cause: e
	});
	return new Q({
		message: "a Non-Webauthn related error has occurred",
		code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
		cause: e
	});
}
var Q, Ml, Nl = o((() => {
	Xl(), Q = class extends Error {
		constructor({ message: e, code: t, cause: n, name: r }) {
			super(e, { cause: n }), this.__isWebAuthnError = !0, this.name = r ?? (n instanceof Error ? n.name : void 0) ?? "Unknown Error", this.code = t;
		}
	}, Ml = class extends Q {
		constructor(e, t) {
			super({
				code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
				cause: t,
				message: e
			}), this.name = "WebAuthnUnknownError", this.originalError = t;
		}
	};
}));
// node_modules/.pnpm/@supabase+auth-js@2.76.1/node_modules/@supabase/auth-js/dist/module/lib/webauthn.js
function Pl(e) {
	if (!e) throw Error("Credential creation options are required");
	if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function") return PublicKeyCredential.parseCreationOptionsFromJSON(e);
	let { challenge: t, user: n, excludeCredentials: r } = e, i = ri(e, [
		"challenge",
		"user",
		"excludeCredentials"
	]), a = yc(t).buffer, o = Object.assign(Object.assign({}, n), { id: yc(n.id).buffer }), s = Object.assign(Object.assign({}, i), {
		challenge: a,
		user: o
	});
	if (r && r.length > 0) {
		s.excludeCredentials = Array(r.length);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			s.excludeCredentials[e] = Object.assign(Object.assign({}, t), {
				id: yc(t.id).buffer,
				type: t.type || "public-key",
				transports: t.transports
			});
		}
	}
	return s;
}
function Fl(e) {
	if (!e) throw Error("Credential request options are required");
	if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function") return PublicKeyCredential.parseRequestOptionsFromJSON(e);
	let { challenge: t, allowCredentials: n } = e, r = ri(e, ["challenge", "allowCredentials"]), i = yc(t).buffer, a = Object.assign(Object.assign({}, r), { challenge: i });
	if (n && n.length > 0) {
		a.allowCredentials = Array(n.length);
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			a.allowCredentials[e] = Object.assign(Object.assign({}, t), {
				id: yc(t.id).buffer,
				type: t.type || "public-key",
				transports: t.transports
			});
		}
	}
	return a;
}
function Il(e) {
	if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
	let t = e;
	return {
		id: e.id,
		rawId: e.id,
		response: {
			attestationObject: xc(new Uint8Array(e.response.attestationObject)),
			clientDataJSON: xc(new Uint8Array(e.response.clientDataJSON))
		},
		type: "public-key",
		clientExtensionResults: e.getClientExtensionResults(),
		authenticatorAttachment: t.authenticatorAttachment ?? void 0
	};
}
function Ll(e) {
	if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
	let t = e, n = e.getClientExtensionResults(), r = e.response;
	return {
		id: e.id,
		rawId: e.id,
		response: {
			authenticatorData: xc(new Uint8Array(r.authenticatorData)),
			clientDataJSON: xc(new Uint8Array(r.clientDataJSON)),
			signature: xc(new Uint8Array(r.signature)),
			userHandle: r.userHandle ? xc(new Uint8Array(r.userHandle)) : void 0
		},
		type: "public-key",
		clientExtensionResults: n,
		authenticatorAttachment: t.authenticatorAttachment ?? void 0
	};
}
function Rl(e) {
	return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function zl() {
	return !!(Y() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof (navigator == null ? void 0 : navigator.credentials)?.create == "function" && typeof (navigator == null ? void 0 : navigator.credentials)?.get == "function");
}
async function Bl(e) {
	try {
		let t = await navigator.credentials.create(e);
		return t ? t instanceof PublicKeyCredential ? {
			data: t,
			error: null
		} : {
			data: null,
			error: new Ml("Browser returned unexpected credential type", t)
		} : {
			data: null,
			error: new Ml("Empty credential response", t)
		};
	} catch (t) {
		return {
			data: null,
			error: Al({
				error: t,
				options: e
			})
		};
	}
}
async function Vl(e) {
	try {
		let t = await navigator.credentials.get(e);
		return t ? t instanceof PublicKeyCredential ? {
			data: t,
			error: null
		} : {
			data: null,
			error: new Ml("Browser returned unexpected credential type", t)
		} : {
			data: null,
			error: new Ml("Empty credential response", t)
		};
	} catch (t) {
		return {
			data: null,
			error: jl({
				error: t,
				options: e
			})
		};
	}
}
function Hl(...e) {
	let t = (e) => typeof e == "object" && !!e && !Array.isArray(e), n = (e) => e instanceof ArrayBuffer || ArrayBuffer.isView(e), r = {};
	for (let i of e) if (i) for (let e in i) {
		let a = i[e];
		if (a !== void 0) {
			if (Array.isArray(a)) r[e] = a;
			else if (n(a)) r[e] = a;
			else if (t(a)) {
				let n = r[e];
				r[e] = t(n) ? Hl(n, a) : Hl(a);
			} else r[e] = a;
		}
	}
	return r;
}
function Ul(e, t) {
	return Hl(ql, e, t || {});
}
function Wl(e, t) {
	return Hl(Jl, e, t || {});
}
var Gl, Kl, ql, Jl, Yl, Xl = o((() => {
	B(), Tc(), fc(), $c(), Nl(), Gl = class {
		createNewAbortSignal() {
			if (this.controller) {
				let e = /* @__PURE__ */ Error("Cancelling existing WebAuthn API call for new one");
				e.name = "AbortError", this.controller.abort(e);
			}
			let e = new AbortController();
			return this.controller = e, e.signal;
		}
		cancelCeremony() {
			if (this.controller) {
				let e = /* @__PURE__ */ Error("Manually cancelling existing WebAuthn API call");
				e.name = "AbortError", this.controller.abort(e), this.controller = void 0;
			}
		}
	}, Kl = new Gl(), ql = {
		hints: ["security-key"],
		authenticatorSelection: {
			authenticatorAttachment: "cross-platform",
			requireResidentKey: !1,
			userVerification: "preferred",
			residentKey: "discouraged"
		},
		attestation: "none"
	}, Jl = {
		userVerification: "preferred",
		hints: ["security-key"]
	}, Yl = class {
		constructor(e) {
			this.client = e, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
		}
		async _enroll(e) {
			return this.client.mfa.enroll(Object.assign(Object.assign({}, e), { factorType: "webauthn" }));
		}
		async _challenge({ factorId: e, webauthn: t, friendlyName: n, signal: r }, i) {
			try {
				let { data: a, error: o } = await this.client.mfa.challenge({
					factorId: e,
					webauthn: t
				});
				if (!a) return {
					data: null,
					error: o
				};
				let s = r ?? Kl.createNewAbortSignal();
				if (a.webauthn.type === "create") {
					let { user: e } = a.webauthn.credential_options.publicKey;
					e.name ||= `${e.id}:${n}`, e.displayName ||= e.name;
				}
				switch (a.webauthn.type) {
					case "create": {
						let { data: t, error: n } = await Bl({
							publicKey: Ul(a.webauthn.credential_options.publicKey, i?.create),
							signal: s
						});
						return t ? {
							data: {
								factorId: e,
								challengeId: a.id,
								webauthn: {
									type: a.webauthn.type,
									credential_response: t
								}
							},
							error: null
						} : {
							data: null,
							error: n
						};
					}
					case "request": {
						let t = Wl(a.webauthn.credential_options.publicKey, i?.request), { data: n, error: r } = await Vl(Object.assign(Object.assign({}, a.webauthn.credential_options), {
							publicKey: t,
							signal: s
						}));
						return n ? {
							data: {
								factorId: e,
								challengeId: a.id,
								webauthn: {
									type: a.webauthn.type,
									credential_response: n
								}
							},
							error: null
						} : {
							data: null,
							error: r
						};
					}
				}
			} catch (e) {
				return J(e) ? {
					data: null,
					error: e
				} : {
					data: null,
					error: new nc("Unexpected error in challenge", e)
				};
			}
		}
		async _verify({ challengeId: e, factorId: t, webauthn: n }) {
			return this.client.mfa.verify({
				factorId: t,
				challengeId: e,
				webauthn: n
			});
		}
		async _authenticate({ factorId: e, webauthn: { rpId: t = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: r } }, i) {
			if (!t) return {
				data: null,
				error: new ec("rpId is required for WebAuthn authentication")
			};
			try {
				if (!zl()) return {
					data: null,
					error: new nc("Browser does not support WebAuthn", null)
				};
				let { data: a, error: o } = await this.challenge({
					factorId: e,
					webauthn: {
						rpId: t,
						rpOrigins: n
					},
					signal: r
				}, { request: i });
				if (!a) return {
					data: null,
					error: o
				};
				let { webauthn: s } = a;
				return this._verify({
					factorId: e,
					challengeId: a.challengeId,
					webauthn: {
						type: s.type,
						rpId: t,
						rpOrigins: n,
						credential_response: s.credential_response
					}
				});
			} catch (e) {
				return J(e) ? {
					data: null,
					error: e
				} : {
					data: null,
					error: new nc("Unexpected error in authenticate", e)
				};
			}
		}
		async _register({ friendlyName: e, rpId: t = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: r }, i) {
			if (!t) return {
				data: null,
				error: new ec("rpId is required for WebAuthn registration")
			};
			try {
				if (!zl()) return {
					data: null,
					error: new nc("Browser does not support WebAuthn", null)
				};
				let { data: a, error: o } = await this._enroll({ friendlyName: e });
				if (!a) return await this.client.mfa.listFactors().then((t) => t.data?.all.find((t) => t.factor_type === "webauthn" && t.friendly_name === e && t.status !== "unverified")).then((e) => e ? this.client.mfa.unenroll({ factorId: e?.id }) : void 0), {
					data: null,
					error: o
				};
				let { data: s, error: c } = await this._challenge({
					factorId: a.id,
					friendlyName: a.friendly_name,
					webauthn: {
						rpId: t,
						rpOrigins: n
					},
					signal: r
				}, { create: i });
				return s ? this._verify({
					factorId: a.id,
					challengeId: s.challengeId,
					webauthn: {
						rpId: t,
						rpOrigins: n,
						type: s.webauthn.type,
						credential_response: s.webauthn.credential_response
					}
				}) : {
					data: null,
					error: c
				};
			} catch (e) {
				return J(e) ? {
					data: null,
					error: e
				} : {
					data: null,
					error: new nc("Unexpected error in register", e)
				};
			}
		}
	};
}));
// node_modules/.pnpm/@supabase+auth-js@2.76.1/node_modules/@supabase/auth-js/dist/module/GoTrueClient.js
async function Zl(e, t, n) {
	return await n();
}
var Ql, $l, eu, tu = o((() => {
	hl(), Js(), fc(), dl(), $c(), wl(), zs(), Tc(), Xl(), Tl(), Ql = {
		url: Hs,
		storageKey: Us,
		autoRefreshToken: !0,
		persistSession: !0,
		detectSessionInUrl: !0,
		headers: Ws,
		flowType: "implicit",
		debug: !1,
		hasCustomAuthorizationHeader: !1
	}, $l = {}, eu = class e {
		get jwks() {
			return $l[this.storageKey]?.jwks ?? { keys: [] };
		}
		set jwks(e) {
			$l[this.storageKey] = Object.assign(Object.assign({}, $l[this.storageKey]), { jwks: e });
		}
		get jwks_cached_at() {
			return $l[this.storageKey]?.cachedAt ?? -(2 ** 53 - 1);
		}
		set jwks_cached_at(e) {
			$l[this.storageKey] = Object.assign(Object.assign({}, $l[this.storageKey]), { cachedAt: e });
		}
		constructor(t) {
			var n;
			this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = e.nextInstanceID, e.nextInstanceID += 1, this.instanceID > 0 && Y() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
			let r = Object.assign(Object.assign({}, Ql), t);
			if (this.logDebugMessages = !!r.debug, typeof r.debug == "function" && (this.logger = r.debug), this.persistSession = r.persistSession, this.storageKey = r.storageKey, this.autoRefreshToken = r.autoRefreshToken, this.admin = new ml({
				url: r.url,
				headers: r.headers,
				fetch: r.fetch
			}), this.url = r.url, this.headers = r.headers, this.fetch = Gc(r.fetch), this.lock = r.lock || Zl, this.detectSessionInUrl = r.detectSessionInUrl, this.flowType = r.flowType, this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader, this.lock = r.lock ? r.lock : Y() && (globalThis == null ? void 0 : globalThis.navigator)?.locks ? _l : Zl, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = -(2 ** 53 - 1)), this.mfa = {
				verify: this._verify.bind(this),
				enroll: this._enroll.bind(this),
				unenroll: this._unenroll.bind(this),
				challenge: this._challenge.bind(this),
				listFactors: this._listFactors.bind(this),
				challengeAndVerify: this._challengeAndVerify.bind(this),
				getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
				webauthn: new Yl(this)
			}, this.persistSession ? (r.storage ? this.storage = r.storage : Wc() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = gl(this.memoryStorage)), r.userStorage && (this.userStorage = r.userStorage)) : (this.memoryStorage = {}, this.storage = gl(this.memoryStorage)), Y() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
				try {
					this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
				} catch (e) {
					console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e);
				}
				(n = this.broadcastChannel) == null || n.addEventListener("message", async (e) => {
					this._debug("received broadcast notification from other tab or client", e), await this._notifyAllSubscribers(e.data.event, e.data.session, !1);
				});
			}
			this.initialize();
		}
		_debug(...e) {
			return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${Rs}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...e), this;
		}
		async initialize() {
			return this.initializePromise ||= (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise;
		}
		async _initialize() {
			try {
				let e = Oc(window.location.href), t = "none";
				if (this._isImplicitGrantCallback(e) ? t = "implicit" : await this._isPKCECallback(e) && (t = "pkce"), Y() && this.detectSessionInUrl && t !== "none") {
					let { data: n, error: r } = await this._getSessionFromURL(e, t);
					if (r) {
						if (this._debug("#_initialize()", "error detecting session from URL", r), Zs(r)) {
							let e = r.details?.code;
							if (e === "identity_already_exists" || e === "identity_not_found" || e === "single_identity_not_deletable") return { error: r };
						}
						return await this._removeSession(), { error: r };
					}
					let { session: i, redirectType: a } = n;
					return this._debug("#_initialize()", "detected session in URL", i, "redirect type", a), await this._saveSession(i), setTimeout(async () => {
						a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i) : await this._notifyAllSubscribers("SIGNED_IN", i);
					}, 0), { error: null };
				}
				return await this._recoverAndRefresh(), { error: null };
			} catch (e) {
				return J(e) ? { error: e } : { error: new nc("Unexpected error during initialization", e) };
			} finally {
				await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
			}
		}
		async signInAnonymously(e) {
			try {
				let { data: t, error: n } = await X(this.fetch, "POST", `${this.url}/signup`, {
					headers: this.headers,
					body: {
						data: e?.options?.data ?? {},
						gotrue_meta_security: { captcha_token: e?.options?.captchaToken }
					},
					xform: Z
				});
				if (n || !t) return {
					data: {
						user: null,
						session: null
					},
					error: n
				};
				let r = t.session, i = t.user;
				return t.session && (await this._saveSession(t.session), await this._notifyAllSubscribers("SIGNED_IN", r)), {
					data: {
						user: i,
						session: r
					},
					error: null
				};
			} catch (e) {
				if (J(e)) return {
					data: {
						user: null,
						session: null
					},
					error: e
				};
				throw e;
			}
		}
		async signUp(e) {
			try {
				let t;
				if ("email" in e) {
					let { email: n, password: r, options: i } = e, a = null, o = null;
					this.flowType === "pkce" && ([a, o] = await Ic(this.storage, this.storageKey)), t = await X(this.fetch, "POST", `${this.url}/signup`, {
						headers: this.headers,
						redirectTo: i?.emailRedirectTo,
						body: {
							email: n,
							password: r,
							data: i?.data ?? {},
							gotrue_meta_security: { captcha_token: i?.captchaToken },
							code_challenge: a,
							code_challenge_method: o
						},
						xform: Z
					});
				} else if ("phone" in e) {
					let { phone: n, password: r, options: i } = e;
					t = await X(this.fetch, "POST", `${this.url}/signup`, {
						headers: this.headers,
						body: {
							phone: n,
							password: r,
							data: i?.data ?? {},
							channel: i?.channel ?? "sms",
							gotrue_meta_security: { captcha_token: i?.captchaToken }
						},
						xform: Z
					});
				} else throw new oc("You must provide either an email or phone number and a password");
				let { data: n, error: r } = t;
				if (r || !n) return {
					data: {
						user: null,
						session: null
					},
					error: r
				};
				let i = n.session, a = n.user;
				return n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", i)), {
					data: {
						user: a,
						session: i
					},
					error: null
				};
			} catch (e) {
				if (J(e)) return {
					data: {
						user: null,
						session: null
					},
					error: e
				};
				throw e;
			}
		}
		async signInWithPassword(e) {
			try {
				let t;
				if ("email" in e) {
					let { email: n, password: r, options: i } = e;
					t = await X(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
						headers: this.headers,
						body: {
							email: n,
							password: r,
							gotrue_meta_security: { captcha_token: i?.captchaToken }
						},
						xform: nl
					});
				} else if ("phone" in e) {
					let { phone: n, password: r, options: i } = e;
					t = await X(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
						headers: this.headers,
						body: {
							phone: n,
							password: r,
							gotrue_meta_security: { captcha_token: i?.captchaToken }
						},
						xform: nl
					});
				} else throw new oc("You must provide either an email or phone number and a password");
				let { data: n, error: r } = t;
				return r ? {
					data: {
						user: null,
						session: null
					},
					error: r
				} : !n || !n.session || !n.user ? {
					data: {
						user: null,
						session: null
					},
					error: new ac()
				} : (n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), {
					data: Object.assign({
						user: n.user,
						session: n.session
					}, n.weak_password ? { weakPassword: n.weak_password } : null),
					error: r
				});
			} catch (e) {
				if (J(e)) return {
					data: {
						user: null,
						session: null
					},
					error: e
				};
				throw e;
			}
		}
		async signInWithOAuth(e) {
			return await this._handleProviderSignIn(e.provider, {
				redirectTo: e.options?.redirectTo,
				scopes: e.options?.scopes,
				queryParams: e.options?.queryParams,
				skipBrowserRedirect: e.options?.skipBrowserRedirect
			});
		}
		async exchangeCodeForSession(e) {
			return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e));
		}
		async signInWithWeb3(e) {
			let { chain: t } = e;
			switch (t) {
				case "ethereum": return await this.signInWithEthereum(e);
				case "solana": return await this.signInWithSolana(e);
				default: throw Error(`@supabase/auth-js: Unsupported chain "${t}"`);
			}
		}
		async signInWithEthereum(e) {
			let t, n;
			if ("message" in e) t = e.message, n = e.signature;
			else {
				let { chain: r, wallet: i, statement: a, options: o } = e, s;
				if (!Y()) {
					if (typeof i != "object" || !o?.url) throw Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
					s = i;
				} else if (typeof i == "object") s = i;
				else {
					let e = window;
					if ("ethereum" in e && typeof e.ethereum == "object" && "request" in e.ethereum && typeof e.ethereum.request == "function") s = e.ethereum;
					else throw Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
				}
				let c = new URL(o?.url ?? window.location.href), l = await s.request({ method: "eth_requestAccounts" }).then((e) => e).catch(() => {
					throw Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
				});
				if (!l || l.length === 0) throw Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
				let u = El(l[0]), d = o?.signInWithEthereum?.chainId;
				d ||= Dl(await s.request({ method: "eth_chainId" })), t = kl({
					domain: c.host,
					address: u,
					statement: a,
					uri: c.href,
					version: "1",
					chainId: d,
					nonce: o?.signInWithEthereum?.nonce,
					issuedAt: o?.signInWithEthereum?.issuedAt ?? /* @__PURE__ */ new Date(),
					expirationTime: o?.signInWithEthereum?.expirationTime,
					notBefore: o?.signInWithEthereum?.notBefore,
					requestId: o?.signInWithEthereum?.requestId,
					resources: o?.signInWithEthereum?.resources
				}), n = await s.request({
					method: "personal_sign",
					params: [Ol(t), u]
				});
			}
			try {
				let { data: r, error: i } = await X(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
					headers: this.headers,
					body: Object.assign({
						chain: "ethereum",
						message: t,
						signature: n
					}, e.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e.options?.captchaToken } } : null),
					xform: Z
				});
				if (i) throw i;
				return !r || !r.session || !r.user ? {
					data: {
						user: null,
						session: null
					},
					error: new ac()
				} : (r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), {
					data: Object.assign({}, r),
					error: i
				});
			} catch (e) {
				if (J(e)) return {
					data: {
						user: null,
						session: null
					},
					error: e
				};
				throw e;
			}
		}
		async signInWithSolana(e) {
			let t, n;
			if ("message" in e) t = e.message, n = e.signature;
			else {
				let { chain: r, wallet: i, statement: a, options: o } = e, s;
				if (!Y()) {
					if (typeof i != "object" || !o?.url) throw Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
					s = i;
				} else if (typeof i == "object") s = i;
				else {
					let e = window;
					if ("solana" in e && typeof e.solana == "object" && ("signIn" in e.solana && typeof e.solana.signIn == "function" || "signMessage" in e.solana && typeof e.solana.signMessage == "function")) s = e.solana;
					else throw Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
				}
				let c = new URL(o?.url ?? window.location.href);
				if ("signIn" in s && s.signIn) {
					let e = await s.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, o?.signInWithSolana), {
						version: "1",
						domain: c.host,
						uri: c.href
					}), a ? { statement: a } : null)), r;
					if (Array.isArray(e) && e[0] && typeof e[0] == "object") r = e[0];
					else if (e && typeof e == "object" && "signedMessage" in e && "signature" in e) r = e;
					else throw Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
					if ("signedMessage" in r && "signature" in r && (typeof r.signedMessage == "string" || r.signedMessage instanceof Uint8Array) && r.signature instanceof Uint8Array) t = typeof r.signedMessage == "string" ? r.signedMessage : new TextDecoder().decode(r.signedMessage), n = r.signature;
					else throw Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
				} else {
					if (!("signMessage" in s) || typeof s.signMessage != "function" || !("publicKey" in s) || typeof s != "object" || !s.publicKey || !("toBase58" in s.publicKey) || typeof s.publicKey.toBase58 != "function") throw Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
					t = [
						`${c.host} wants you to sign in with your Solana account:`,
						s.publicKey.toBase58(),
						...a ? [
							"",
							a,
							""
						] : [""],
						"Version: 1",
						`URI: ${c.href}`,
						`Issued At: ${o?.signInWithSolana?.issuedAt ?? (/* @__PURE__ */ new Date()).toISOString()}`,
						...o?.signInWithSolana?.notBefore ? [`Not Before: ${o.signInWithSolana.notBefore}`] : [],
						...o?.signInWithSolana?.expirationTime ? [`Expiration Time: ${o.signInWithSolana.expirationTime}`] : [],
						...o?.signInWithSolana?.chainId ? [`Chain ID: ${o.signInWithSolana.chainId}`] : [],
						...o?.signInWithSolana?.nonce ? [`Nonce: ${o.signInWithSolana.nonce}`] : [],
						...o?.signInWithSolana?.requestId ? [`Request ID: ${o.signInWithSolana.requestId}`] : [],
						...o?.signInWithSolana?.resources?.length ? ["Resources", ...o.signInWithSolana.resources.map((e) => `- ${e}`)] : []
					].join("\n");
					let e = await s.signMessage(new TextEncoder().encode(t), "utf8");
					if (!e || !(e instanceof Uint8Array)) throw Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
					n = e;
				}
			}
			try {
				let { data: r, error: i } = await X(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
					headers: this.headers,
					body: Object.assign({
						chain: "solana",
						message: t,
						signature: xc(n)
					}, e.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e.options?.captchaToken } } : null),
					xform: Z
				});
				if (i) throw i;
				return !r || !r.session || !r.user ? {
					data: {
						user: null,
						session: null
					},
					error: new ac()
				} : (r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), {
					data: Object.assign({}, r),
					error: i
				});
			} catch (e) {
				if (J(e)) return {
					data: {
						user: null,
						session: null
					},
					error: e
				};
				throw e;
			}
		}
		async _exchangeCodeForSession(e) {
			let [t, n] = (await Jc(this.storage, `${this.storageKey}-code-verifier`) ?? "").split("/");
			try {
				let { data: r, error: i } = await X(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
					headers: this.headers,
					body: {
						auth_code: e,
						code_verifier: t
					},
					xform: Z
				});
				if (await Yc(this.storage, `${this.storageKey}-code-verifier`), i) throw i;
				return !r || !r.session || !r.user ? {
					data: {
						user: null,
						session: null,
						redirectType: null
					},
					error: new ac()
				} : (r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), {
					data: Object.assign(Object.assign({}, r), { redirectType: n ?? null }),
					error: i
				});
			} catch (e) {
				if (J(e)) return {
					data: {
						user: null,
						session: null,
						redirectType: null
					},
					error: e
				};
				throw e;
			}
		}
		async signInWithIdToken(e) {
			try {
				let { options: t, provider: n, token: r, access_token: i, nonce: a } = e, { data: o, error: s } = await X(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
					headers: this.headers,
					body: {
						provider: n,
						id_token: r,
						access_token: i,
						nonce: a,
						gotrue_meta_security: { captcha_token: t?.captchaToken }
					},
					xform: Z
				});
				return s ? {
					data: {
						user: null,
						session: null
					},
					error: s
				} : !o || !o.session || !o.user ? {
					data: {
						user: null,
						session: null
					},
					error: new ac()
				} : (o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", o.session)), {
					data: o,
					error: s
				});
			} catch (e) {
				if (J(e)) return {
					data: {
						user: null,
						session: null
					},
					error: e
				};
				throw e;
			}
		}
		async signInWithOtp(e) {
			try {
				if ("email" in e) {
					let { email: t, options: n } = e, r = null, i = null;
					this.flowType === "pkce" && ([r, i] = await Ic(this.storage, this.storageKey));
					let { error: a } = await X(this.fetch, "POST", `${this.url}/otp`, {
						headers: this.headers,
						body: {
							email: t,
							data: n?.data ?? {},
							create_user: n?.shouldCreateUser ?? !0,
							gotrue_meta_security: { captcha_token: n?.captchaToken },
							code_challenge: r,
							code_challenge_method: i
						},
						redirectTo: n?.emailRedirectTo
					});
					return {
						data: {
							user: null,
							session: null
						},
						error: a
					};
				}
				if ("phone" in e) {
					let { phone: t, options: n } = e, { data: r, error: i } = await X(this.fetch, "POST", `${this.url}/otp`, {
						headers: this.headers,
						body: {
							phone: t,
							data: n?.data ?? {},
							create_user: n?.shouldCreateUser ?? !0,
							gotrue_meta_security: { captcha_token: n?.captchaToken },
							channel: n?.channel ?? "sms"
						}
					});
					return {
						data: {
							user: null,
							session: null,
							messageId: r?.message_id
						},
						error: i
					};
				}
				throw new oc("You must provide either an email or phone number.");
			} catch (e) {
				if (J(e)) return {
					data: {
						user: null,
						session: null
					},
					error: e
				};
				throw e;
			}
		}
		async verifyOtp(e) {
			try {
				let t, n;
				"options" in e && (t = e.options?.redirectTo, n = e.options?.captchaToken);
				let { data: r, error: i } = await X(this.fetch, "POST", `${this.url}/verify`, {
					headers: this.headers,
					body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: n } }),
					redirectTo: t,
					xform: Z
				});
				if (i) throw i;
				if (!r) throw Error("An error occurred on token verification.");
				let a = r.session, o = r.user;
				return a?.access_token && (await this._saveSession(a), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", a)), {
					data: {
						user: o,
						session: a
					},
					error: null
				};
			} catch (e) {
				if (J(e)) return {
					data: {
						user: null,
						session: null
					},
					error: e
				};
				throw e;
			}
		}
		async signInWithSSO(e) {
			try {
				let t = null, n = null;
				return this.flowType === "pkce" && ([t, n] = await Ic(this.storage, this.storageKey)), await X(this.fetch, "POST", `${this.url}/sso`, {
					body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: e.options?.redirectTo ?? void 0 }), e?.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), {
						skip_http_redirect: !0,
						code_challenge: t,
						code_challenge_method: n
					}),
					headers: this.headers,
					xform: il
				});
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
		async reauthenticate() {
			return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
		}
		async _reauthenticate() {
			try {
				return await this._useSession(async (e) => {
					let { data: { session: t }, error: n } = e;
					if (n) throw n;
					if (!t) throw new ic();
					let { error: r } = await X(this.fetch, "GET", `${this.url}/reauthenticate`, {
						headers: this.headers,
						jwt: t.access_token
					});
					return {
						data: {
							user: null,
							session: null
						},
						error: r
					};
				});
			} catch (e) {
				if (J(e)) return {
					data: {
						user: null,
						session: null
					},
					error: e
				};
				throw e;
			}
		}
		async resend(e) {
			try {
				let t = `${this.url}/resend`;
				if ("email" in e) {
					let { email: n, type: r, options: i } = e, { error: a } = await X(this.fetch, "POST", t, {
						headers: this.headers,
						body: {
							email: n,
							type: r,
							gotrue_meta_security: { captcha_token: i?.captchaToken }
						},
						redirectTo: i?.emailRedirectTo
					});
					return {
						data: {
							user: null,
							session: null
						},
						error: a
					};
				}
				if ("phone" in e) {
					let { phone: n, type: r, options: i } = e, { data: a, error: o } = await X(this.fetch, "POST", t, {
						headers: this.headers,
						body: {
							phone: n,
							type: r,
							gotrue_meta_security: { captcha_token: i?.captchaToken }
						}
					});
					return {
						data: {
							user: null,
							session: null,
							messageId: a?.message_id
						},
						error: o
					};
				}
				throw new oc("You must provide either an email or phone number and a type");
			} catch (e) {
				if (J(e)) return {
					data: {
						user: null,
						session: null
					},
					error: e
				};
				throw e;
			}
		}
		async getSession() {
			return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (e) => e));
		}
		async _acquireLock(e, t) {
			this._debug("#_acquireLock", "begin", e);
			try {
				if (this.lockAcquired) {
					let e = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), n = (async () => (await e, await t()))();
					return this.pendingInLock.push((async () => {
						try {
							await n;
						} catch {}
					})()), n;
				}
				return await this.lock(`lock:${this.storageKey}`, e, async () => {
					this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
					try {
						this.lockAcquired = !0;
						let e = t();
						for (this.pendingInLock.push((async () => {
							try {
								await e;
							} catch {}
						})()), await e; this.pendingInLock.length;) {
							let e = [...this.pendingInLock];
							await Promise.all(e), this.pendingInLock.splice(0, e.length);
						}
						return await e;
					} finally {
						this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
					}
				});
			} finally {
				this._debug("#_acquireLock", "end");
			}
		}
		async _useSession(e) {
			this._debug("#_useSession", "begin");
			try {
				return await e(await this.__loadSession());
			} finally {
				this._debug("#_useSession", "end");
			}
		}
		async __loadSession() {
			this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", (/* @__PURE__ */ Error()).stack);
			try {
				let e = null, t = await Jc(this.storage, this.storageKey);
				if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e) return {
					data: { session: null },
					error: null
				};
				let n = e.expires_at ? e.expires_at * 1e3 - Date.now() < Vs : !1;
				if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", e.expires_at), !n) {
					if (this.userStorage) {
						let t = await Jc(this.userStorage, this.storageKey + "-user");
						t?.user ? e.user = t.user : e.user = Vc();
					}
					if (this.storage.isServer && e.user) {
						let t = this.suppressGetSessionWarning;
						e = new Proxy(e, { get: (e, n, r) => (!t && n === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), t = !0, this.suppressGetSessionWarning = !0), Reflect.get(e, n, r)) });
					}
					return {
						data: { session: e },
						error: null
					};
				}
				let { data: r, error: i } = await this._callRefreshToken(e.refresh_token);
				return i ? {
					data: { session: null },
					error: i
				} : {
					data: { session: r },
					error: null
				};
			} finally {
				this._debug("#__loadSession()", "end");
			}
		}
		async getUser(e) {
			return e ? await this._getUser(e) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
		}
		async _getUser(e) {
			try {
				return e ? await X(this.fetch, "GET", `${this.url}/user`, {
					headers: this.headers,
					jwt: e,
					xform: rl
				}) : await this._useSession(async (e) => {
					let { data: t, error: n } = e;
					if (n) throw n;
					return !t.session?.access_token && !this.hasCustomAuthorizationHeader ? {
						data: { user: null },
						error: new ic()
					} : await X(this.fetch, "GET", `${this.url}/user`, {
						headers: this.headers,
						jwt: t.session?.access_token ?? void 0,
						xform: rl
					});
				});
			} catch (e) {
				if (J(e)) return Xs(e) && (await this._removeSession(), await Yc(this.storage, `${this.storageKey}-code-verifier`)), {
					data: { user: null },
					error: e
				};
				throw e;
			}
		}
		async updateUser(e, t = {}) {
			return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, t));
		}
		async _updateUser(e, t = {}) {
			try {
				return await this._useSession(async (n) => {
					let { data: r, error: i } = n;
					if (i) throw i;
					if (!r.session) throw new ic();
					let a = r.session, o = null, s = null;
					this.flowType === "pkce" && e.email != null && ([o, s] = await Ic(this.storage, this.storageKey));
					let { data: c, error: l } = await X(this.fetch, "PUT", `${this.url}/user`, {
						headers: this.headers,
						redirectTo: t?.emailRedirectTo,
						body: Object.assign(Object.assign({}, e), {
							code_challenge: o,
							code_challenge_method: s
						}),
						jwt: a.access_token,
						xform: rl
					});
					if (l) throw l;
					return a.user = c.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), {
						data: { user: a.user },
						error: null
					};
				});
			} catch (e) {
				if (J(e)) return {
					data: { user: null },
					error: e
				};
				throw e;
			}
		}
		async setSession(e) {
			return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e));
		}
		async _setSession(e) {
			try {
				if (!e.access_token || !e.refresh_token) throw new ic();
				let t = Date.now() / 1e3, n = t, r = !0, i = null, { payload: a } = kc(e.access_token);
				if (a.exp && (n = a.exp, r = n <= t), r) {
					let { data: t, error: n } = await this._callRefreshToken(e.refresh_token);
					if (n) return {
						data: {
							user: null,
							session: null
						},
						error: n
					};
					if (!t) return {
						data: {
							user: null,
							session: null
						},
						error: null
					};
					i = t;
				} else {
					let { data: r, error: a } = await this._getUser(e.access_token);
					if (a) throw a;
					i = {
						access_token: e.access_token,
						refresh_token: e.refresh_token,
						user: r.user,
						token_type: "bearer",
						expires_in: n - t,
						expires_at: n
					}, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i);
				}
				return {
					data: {
						user: i.user,
						session: i
					},
					error: null
				};
			} catch (e) {
				if (J(e)) return {
					data: {
						session: null,
						user: null
					},
					error: e
				};
				throw e;
			}
		}
		async refreshSession(e) {
			return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e));
		}
		async _refreshSession(e) {
			try {
				return await this._useSession(async (t) => {
					if (!e) {
						let { data: n, error: r } = t;
						if (r) throw r;
						e = n.session ?? void 0;
					}
					if (!e?.refresh_token) throw new ic();
					let { data: n, error: r } = await this._callRefreshToken(e.refresh_token);
					return r ? {
						data: {
							user: null,
							session: null
						},
						error: r
					} : n ? {
						data: {
							user: n.user,
							session: n
						},
						error: null
					} : {
						data: {
							user: null,
							session: null
						},
						error: null
					};
				});
			} catch (e) {
				if (J(e)) return {
					data: {
						user: null,
						session: null
					},
					error: e
				};
				throw e;
			}
		}
		async _getSessionFromURL(e, t) {
			try {
				if (!Y()) throw new sc("No browser detected.");
				if (e.error || e.error_description || e.error_code) throw new sc(e.error_description || "Error in URL with unspecified error_description", {
					error: e.error || "unspecified_error",
					code: e.error_code || "unspecified_code"
				});
				switch (t) {
					case "implicit":
						if (this.flowType === "pkce") throw new cc("Not a valid PKCE flow url.");
						break;
					case "pkce": if (this.flowType === "implicit") throw new sc("Not a valid implicit grant flow url.");
				}
				if (t === "pkce") {
					if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code) throw new cc("No code detected.");
					let { data: t, error: n } = await this._exchangeCodeForSession(e.code);
					if (n) throw n;
					let r = new URL(window.location.href);
					return r.searchParams.delete("code"), window.history.replaceState(window.history.state, "", r.toString()), {
						data: {
							session: t.session,
							redirectType: null
						},
						error: null
					};
				}
				let { provider_token: n, provider_refresh_token: r, access_token: i, refresh_token: a, expires_in: o, expires_at: s, token_type: c } = e;
				if (!i || !o || !a || !c) throw new sc("No session defined in URL");
				let l = Math.round(Date.now() / 1e3), u = parseInt(o), d = l + u;
				s && (d = parseInt(s));
				let f = d - l;
				f * 1e3 <= 3e4 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);
				let p = d - u;
				l - p >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", p, d, l) : l - p < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", p, d, l);
				let { data: m, error: h } = await this._getUser(i);
				if (h) throw h;
				let g = {
					provider_token: n,
					provider_refresh_token: r,
					access_token: i,
					expires_in: u,
					expires_at: d,
					refresh_token: a,
					token_type: c,
					user: m.user
				};
				return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), {
					data: {
						session: g,
						redirectType: e.type
					},
					error: null
				};
			} catch (e) {
				if (J(e)) return {
					data: {
						session: null,
						redirectType: null
					},
					error: e
				};
				throw e;
			}
		}
		_isImplicitGrantCallback(e) {
			return !!(e.access_token || e.error_description);
		}
		async _isPKCECallback(e) {
			let t = await Jc(this.storage, `${this.storageKey}-code-verifier`);
			return !!(e.code && t);
		}
		async signOut(e = { scope: "global" }) {
			return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e));
		}
		async _signOut({ scope: e } = { scope: "global" }) {
			return await this._useSession(async (t) => {
				let { data: n, error: r } = t;
				if (r) return { error: r };
				let i = n.session?.access_token;
				if (i) {
					let { error: t } = await this.admin.signOut(i, e);
					if (t && (!Ys(t) || t.status !== 404 && t.status !== 401 && t.status !== 403)) return { error: t };
				}
				return e !== "others" && (await this._removeSession(), await Yc(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
			});
		}
		onAuthStateChange(e) {
			let t = Dc(), n = {
				id: t,
				callback: e,
				unsubscribe: () => {
					this._debug("#unsubscribe()", "state change callback with id removed", t), this.stateChangeEmitters.delete(t);
				}
			};
			return this._debug("#onAuthStateChange()", "registered callback with id", t), this.stateChangeEmitters.set(t, n), (async () => {
				await this.initializePromise, await this._acquireLock(-1, async () => {
					this._emitInitialSession(t);
				});
			})(), { data: { subscription: n } };
		}
		async _emitInitialSession(e) {
			return await this._useSession(async (t) => {
				try {
					let { data: { session: n }, error: r } = t;
					if (r) throw r;
					await this.stateChangeEmitters.get(e)?.callback("INITIAL_SESSION", n), this._debug("INITIAL_SESSION", "callback id", e, "session", n);
				} catch (t) {
					await this.stateChangeEmitters.get(e)?.callback("INITIAL_SESSION", null), this._debug("INITIAL_SESSION", "callback id", e, "error", t), console.error(t);
				}
			});
		}
		async resetPasswordForEmail(e, t = {}) {
			let n = null, r = null;
			this.flowType === "pkce" && ([n, r] = await Ic(this.storage, this.storageKey, !0));
			try {
				return await X(this.fetch, "POST", `${this.url}/recover`, {
					body: {
						email: e,
						code_challenge: n,
						code_challenge_method: r,
						gotrue_meta_security: { captcha_token: t.captchaToken }
					},
					headers: this.headers,
					redirectTo: t.redirectTo
				});
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
		async getUserIdentities() {
			try {
				let { data: e, error: t } = await this.getUser();
				if (t) throw t;
				return {
					data: { identities: e.user.identities ?? [] },
					error: null
				};
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
		async linkIdentity(e) {
			return "token" in e ? this.linkIdentityIdToken(e) : this.linkIdentityOAuth(e);
		}
		async linkIdentityOAuth(e) {
			try {
				let { data: t, error: n } = await this._useSession(async (t) => {
					let { data: n, error: r } = t;
					if (r) throw r;
					let i = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
						redirectTo: e.options?.redirectTo,
						scopes: e.options?.scopes,
						queryParams: e.options?.queryParams,
						skipBrowserRedirect: !0
					});
					return await X(this.fetch, "GET", i, {
						headers: this.headers,
						jwt: n.session?.access_token ?? void 0
					});
				});
				if (n) throw n;
				return Y() && !e.options?.skipBrowserRedirect && window.location.assign(t?.url), {
					data: {
						provider: e.provider,
						url: t?.url
					},
					error: null
				};
			} catch (t) {
				if (J(t)) return {
					data: {
						provider: e.provider,
						url: null
					},
					error: t
				};
				throw t;
			}
		}
		async linkIdentityIdToken(e) {
			return await this._useSession(async (t) => {
				try {
					let { error: n, data: { session: r } } = t;
					if (n) throw n;
					let { options: i, provider: a, token: o, access_token: s, nonce: c } = e, { data: l, error: u } = await X(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
						headers: this.headers,
						jwt: r?.access_token ?? void 0,
						body: {
							provider: a,
							id_token: o,
							access_token: s,
							nonce: c,
							link_identity: !0,
							gotrue_meta_security: { captcha_token: i?.captchaToken }
						},
						xform: Z
					});
					return u ? {
						data: {
							user: null,
							session: null
						},
						error: u
					} : !l || !l.session || !l.user ? {
						data: {
							user: null,
							session: null
						},
						error: new ac()
					} : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("USER_UPDATED", l.session)), {
						data: l,
						error: u
					});
				} catch (e) {
					if (J(e)) return {
						data: {
							user: null,
							session: null
						},
						error: e
					};
					throw e;
				}
			});
		}
		async unlinkIdentity(e) {
			try {
				return await this._useSession(async (t) => {
					let { data: n, error: r } = t;
					if (r) throw r;
					return await X(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
						headers: this.headers,
						jwt: n.session?.access_token ?? void 0
					});
				});
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
		async _refreshAccessToken(e) {
			let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
			this._debug(t, "begin");
			try {
				let n = Date.now();
				return await jc(async (n) => (n > 0 && await Ac(200 * 2 ** (n - 1)), this._debug(t, "refreshing attempt", n), await X(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
					body: { refresh_token: e },
					headers: this.headers,
					xform: Z
				})), (e, t) => {
					let r = 200 * 2 ** e;
					return t && Qs(t) && Date.now() + r - n < 3e4;
				});
			} catch (e) {
				if (this._debug(t, "error", e), J(e)) return {
					data: {
						session: null,
						user: null
					},
					error: e
				};
				throw e;
			} finally {
				this._debug(t, "end");
			}
		}
		_isValidSession(e) {
			return typeof e == "object" && !!e && "access_token" in e && "refresh_token" in e && "expires_at" in e;
		}
		async _handleProviderSignIn(e, t) {
			let n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
				redirectTo: t.redirectTo,
				scopes: t.scopes,
				queryParams: t.queryParams
			});
			return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", n), Y() && !t.skipBrowserRedirect && window.location.assign(n), {
				data: {
					provider: e,
					url: n
				},
				error: null
			};
		}
		async _recoverAndRefresh() {
			let e = "#_recoverAndRefresh()";
			this._debug(e, "begin");
			try {
				let t = await Jc(this.storage, this.storageKey);
				if (t && this.userStorage) {
					let e = await Jc(this.userStorage, this.storageKey + "-user");
					!this.storage.isServer && Object.is(this.storage, this.userStorage) && !e && (e = { user: t.user }, await qc(this.userStorage, this.storageKey + "-user", e)), t.user = e?.user ?? Vc();
				} else if (t && !t.user && !t.user) {
					let e = await Jc(this.storage, this.storageKey + "-user");
					e && e?.user ? (t.user = e.user, await Yc(this.storage, this.storageKey + "-user"), await qc(this.storage, this.storageKey, t)) : t.user = Vc();
				}
				if (this._debug(e, "session from storage", t), !this._isValidSession(t)) {
					this._debug(e, "session is not valid"), t !== null && await this._removeSession();
					return;
				}
				let n = (t.expires_at ?? 1e400) * 1e3 - Date.now() < Vs;
				if (this._debug(e, `session has${n ? "" : " not"} expired with margin of ${Vs}s`), n) {
					if (this.autoRefreshToken && t.refresh_token) {
						let { error: n } = await this._callRefreshToken(t.refresh_token);
						n && (console.error(n), Qs(n) || (this._debug(e, "refresh failed with a non-retryable error, removing the session", n), await this._removeSession()));
					}
				} else if (t.user && t.user.__isUserNotAvailableProxy === !0) try {
					let { data: n, error: r } = await this._getUser(t.access_token);
					!r && n?.user ? (t.user = n.user, await this._saveSession(t), await this._notifyAllSubscribers("SIGNED_IN", t)) : this._debug(e, "could not get user data, skipping SIGNED_IN notification");
				} catch (t) {
					console.error("Error getting user data:", t), this._debug(e, "error getting user data, skipping SIGNED_IN notification", t);
				}
				else await this._notifyAllSubscribers("SIGNED_IN", t);
			} catch (t) {
				this._debug(e, "error", t), console.error(t);
				return;
			} finally {
				this._debug(e, "end");
			}
		}
		async _callRefreshToken(e) {
			var t, n;
			if (!e) throw new ic();
			if (this.refreshingDeferred) return this.refreshingDeferred.promise;
			let r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
			this._debug(r, "begin");
			try {
				this.refreshingDeferred = new Xc();
				let { data: t, error: n } = await this._refreshAccessToken(e);
				if (n) throw n;
				if (!t.session) throw new ic();
				await this._saveSession(t.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
				let r = {
					data: t.session,
					error: null
				};
				return this.refreshingDeferred.resolve(r), r;
			} catch (e) {
				if (this._debug(r, "error", e), J(e)) {
					let n = {
						data: null,
						error: e
					};
					return Qs(e) || await this._removeSession(), (t = this.refreshingDeferred) == null || t.resolve(n), n;
				}
				throw (n = this.refreshingDeferred) == null || n.reject(e), e;
			} finally {
				this.refreshingDeferred = null, this._debug(r, "end");
			}
		}
		async _notifyAllSubscribers(e, t, n = !0) {
			let r = `#_notifyAllSubscribers(${e})`;
			this._debug(r, "begin", t, `broadcast = ${n}`);
			try {
				this.broadcastChannel && n && this.broadcastChannel.postMessage({
					event: e,
					session: t
				});
				let r = [], i = Array.from(this.stateChangeEmitters.values()).map(async (n) => {
					try {
						await n.callback(e, t);
					} catch (e) {
						r.push(e);
					}
				});
				if (await Promise.all(i), r.length > 0) {
					for (let e = 0; e < r.length; e += 1) console.error(r[e]);
					throw r[0];
				}
			} finally {
				this._debug(r, "end");
			}
		}
		async _saveSession(e) {
			this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0;
			let t = Object.assign({}, e), n = t.user && t.user.__isUserNotAvailableProxy === !0;
			if (this.userStorage) {
				!n && t.user && await qc(this.userStorage, this.storageKey + "-user", { user: t.user });
				let e = Object.assign({}, t);
				delete e.user;
				let r = Hc(e);
				await qc(this.storage, this.storageKey, r);
			} else {
				let e = Hc(t);
				await qc(this.storage, this.storageKey, e);
			}
		}
		async _removeSession() {
			this._debug("#_removeSession()"), await Yc(this.storage, this.storageKey), await Yc(this.storage, this.storageKey + "-code-verifier"), await Yc(this.storage, this.storageKey + "-user"), this.userStorage && await Yc(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
		}
		_removeVisibilityChangedCallback() {
			this._debug("#_removeVisibilityChangedCallback()");
			let e = this.visibilityChangedCallback;
			this.visibilityChangedCallback = null;
			try {
				e && Y() && window != null && window.removeEventListener && window.removeEventListener("visibilitychange", e);
			} catch (e) {
				console.error("removing visibilitychange callback failed", e);
			}
		}
		async _startAutoRefresh() {
			await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
			let e = setInterval(() => this._autoRefreshTokenTick(), Bs);
			this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), setTimeout(async () => {
				await this.initializePromise, await this._autoRefreshTokenTick();
			}, 0);
		}
		async _stopAutoRefresh() {
			this._debug("#_stopAutoRefresh()");
			let e = this.autoRefreshTicker;
			this.autoRefreshTicker = null, e && clearInterval(e);
		}
		async startAutoRefresh() {
			this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
		}
		async stopAutoRefresh() {
			this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
		}
		async _autoRefreshTokenTick() {
			this._debug("#_autoRefreshTokenTick()", "begin");
			try {
				await this._acquireLock(0, async () => {
					try {
						let e = Date.now();
						try {
							return await this._useSession(async (t) => {
								let { data: { session: n } } = t;
								if (!n || !n.refresh_token || !n.expires_at) {
									this._debug("#_autoRefreshTokenTick()", "no session");
									return;
								}
								let r = Math.floor((n.expires_at * 1e3 - e) / Bs);
								this._debug("#_autoRefreshTokenTick()", `access token expires in ${r} ticks, a tick lasts ${Bs}ms, refresh threshold is 3 ticks`), r <= 3 && await this._callRefreshToken(n.refresh_token);
							});
						} catch (e) {
							console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
						}
					} finally {
						this._debug("#_autoRefreshTokenTick()", "end");
					}
				});
			} catch (e) {
				if (e.isAcquireTimeout || e instanceof bl) this._debug("auto refresh token tick lock not available");
				else throw e;
			}
		}
		async _handleVisibilityChange() {
			if (this._debug("#_handleVisibilityChange()"), !Y() || !(window != null && window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1;
			try {
				this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
			} catch (e) {
				console.error("_handleVisibilityChange", e);
			}
		}
		async _onVisibilityChanged(e) {
			let t = `#_onVisibilityChanged(${e})`;
			this._debug(t, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
				document.visibilityState === "visible" ? await this._recoverAndRefresh() : this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
			}))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
		}
		async _getUrlForProvider(e, t, n) {
			let r = [`provider=${encodeURIComponent(t)}`];
			if (n?.redirectTo && r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), n?.scopes && r.push(`scopes=${encodeURIComponent(n.scopes)}`), this.flowType === "pkce") {
				let [e, t] = await Ic(this.storage, this.storageKey), n = new URLSearchParams({
					code_challenge: `${encodeURIComponent(e)}`,
					code_challenge_method: `${encodeURIComponent(t)}`
				});
				r.push(n.toString());
			}
			if (n?.queryParams) {
				let e = new URLSearchParams(n.queryParams);
				r.push(e.toString());
			}
			return n?.skipBrowserRedirect && r.push(`skip_http_redirect=${n.skipBrowserRedirect}`), `${e}?${r.join("&")}`;
		}
		async _unenroll(e) {
			try {
				return await this._useSession(async (t) => {
					let { data: n, error: r } = t;
					return r ? {
						data: null,
						error: r
					} : await X(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
						headers: this.headers,
						jwt: n?.session?.access_token
					});
				});
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
		async _enroll(e) {
			try {
				return await this._useSession(async (t) => {
					let { data: n, error: r } = t;
					if (r) return {
						data: null,
						error: r
					};
					let i = Object.assign({
						friendly_name: e.friendlyName,
						factor_type: e.factorType
					}, e.factorType === "phone" ? { phone: e.phone } : e.factorType === "totp" ? { issuer: e.issuer } : {}), { data: a, error: o } = await X(this.fetch, "POST", `${this.url}/factors`, {
						body: i,
						headers: this.headers,
						jwt: n?.session?.access_token
					});
					return o ? {
						data: null,
						error: o
					} : (e.factorType === "totp" && a.type === "totp" && a?.totp?.qr_code && (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`), {
						data: a,
						error: null
					});
				});
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
		async _verify(e) {
			return this._acquireLock(-1, async () => {
				try {
					return await this._useSession(async (t) => {
						let { data: n, error: r } = t;
						if (r) return {
							data: null,
							error: r
						};
						let i = Object.assign({ challenge_id: e.challengeId }, "webauthn" in e ? { webauthn: Object.assign(Object.assign({}, e.webauthn), { credential_response: e.webauthn.type === "create" ? Il(e.webauthn.credential_response) : Ll(e.webauthn.credential_response) }) } : { code: e.code }), { data: a, error: o } = await X(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
							body: i,
							headers: this.headers,
							jwt: n?.session?.access_token
						});
						return o ? {
							data: null,
							error: o
						} : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), {
							data: a,
							error: o
						});
					});
				} catch (e) {
					if (J(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		async _challenge(e) {
			return this._acquireLock(-1, async () => {
				try {
					return await this._useSession(async (t) => {
						let { data: n, error: r } = t;
						if (r) return {
							data: null,
							error: r
						};
						let i = await X(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
							body: e,
							headers: this.headers,
							jwt: n?.session?.access_token
						});
						if (i.error) return i;
						let { data: a } = i;
						if (a.type !== "webauthn") return {
							data: a,
							error: null
						};
						switch (a.webauthn.type) {
							case "create": return {
								data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: Pl(a.webauthn.credential_options.publicKey) }) }) }),
								error: null
							};
							case "request": return {
								data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: Fl(a.webauthn.credential_options.publicKey) }) }) }),
								error: null
							};
						}
					});
				} catch (e) {
					if (J(e)) return {
						data: null,
						error: e
					};
					throw e;
				}
			});
		}
		async _challengeAndVerify(e) {
			let { data: t, error: n } = await this._challenge({ factorId: e.factorId });
			return n ? {
				data: null,
				error: n
			} : await this._verify({
				factorId: e.factorId,
				challengeId: t.id,
				code: e.code
			});
		}
		async _listFactors() {
			let { data: { user: e }, error: t } = await this.getUser();
			if (t) return {
				data: null,
				error: t
			};
			let n = {
				all: [],
				phone: [],
				totp: [],
				webauthn: []
			};
			for (let t of e?.factors ?? []) n.all.push(t), t.status === "verified" && n[t.factor_type].push(t);
			return {
				data: n,
				error: null
			};
		}
		async _getAuthenticatorAssuranceLevel() {
			return this._acquireLock(-1, async () => await this._useSession(async (e) => {
				let { data: { session: t }, error: n } = e;
				if (n) return {
					data: null,
					error: n
				};
				if (!t) return {
					data: {
						currentLevel: null,
						nextLevel: null,
						currentAuthenticationMethods: []
					},
					error: null
				};
				let { payload: r } = kc(t.access_token), i = null;
				r.aal && (i = r.aal);
				let a = i;
				(t.user.factors?.filter((e) => e.status === "verified") ?? []).length > 0 && (a = "aal2");
				let o = r.amr || [];
				return {
					data: {
						currentLevel: i,
						nextLevel: a,
						currentAuthenticationMethods: o
					},
					error: null
				};
			}));
		}
		async fetchJwk(e, t = { keys: [] }) {
			let n = t.keys.find((t) => t.kid === e);
			if (n) return n;
			let r = Date.now();
			if (n = this.jwks.keys.find((t) => t.kid === e), n && this.jwks_cached_at + 6e5 > r) return n;
			let { data: i, error: a } = await X(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, { headers: this.headers });
			if (a) throw a;
			return !i.keys || i.keys.length === 0 || (this.jwks = i, this.jwks_cached_at = r, n = i.keys.find((t) => t.kid === e), !n) ? null : n;
		}
		async getClaims(e, t = {}) {
			try {
				let n = e;
				if (!n) {
					let { data: e, error: t } = await this.getSession();
					if (t || !e.session) return {
						data: null,
						error: t
					};
					n = e.session.access_token;
				}
				let { header: r, payload: i, signature: a, raw: { header: o, payload: s } } = kc(n);
				t?.allowExpired || Rc(i.exp);
				let c = !r.alg || r.alg.startsWith("HS") || !r.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(r.kid, t?.keys ? { keys: t.keys } : t?.jwks);
				if (!c) {
					let { error: e } = await this.getUser(n);
					if (e) throw e;
					return {
						data: {
							claims: i,
							header: r,
							signature: a
						},
						error: null
					};
				}
				let l = zc(r.alg), u = await crypto.subtle.importKey("jwk", c, l, !0, ["verify"]);
				if (!await crypto.subtle.verify(l, u, a, bc(`${o}.${s}`))) throw new dc("Invalid JWT signature");
				return {
					data: {
						claims: i,
						header: r,
						signature: a
					},
					error: null
				};
			} catch (e) {
				if (J(e)) return {
					data: null,
					error: e
				};
				throw e;
			}
		}
	}, eu.nextInstanceID = 0;
})), nu, ru = o((() => {
	hl(), nu = ml;
})), iu, au = o((() => {
	tu(), iu = eu;
})), ou = o((() => {
	hl(), tu(), ru(), au(), pl(), fc(), wl();
})), su, cu = o((() => {
	ou(), su = class extends iu {
		constructor(e) {
			super(e);
		}
	};
})), lu, uu = o((() => {
	ra(), va(), lo(), bs(), ks(), Ns(), Ls(), cu(), lu = class {
		constructor(e, t, n) {
			this.supabaseUrl = e, this.supabaseKey = t;
			let r = Is(e);
			if (!t) throw Error("supabaseKey is required.");
			this.realtimeUrl = new URL("realtime/v1", r), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", r), this.storageUrl = new URL("storage/v1", r), this.functionsUrl = new URL("functions/v1", r);
			let i = `sb-${r.hostname.split(".")[0]}-auth-token`, a = {
				db: Es,
				realtime: Os,
				auth: Object.assign(Object.assign({}, Ds), { storageKey: i }),
				global: Ts
			}, o = Fs(n ?? {}, a);
			this.storageKey = o.auth.storageKey ?? "", this.headers = o.global.headers ?? {}, o.accessToken ? (this.accessToken = o.accessToken, this.auth = new Proxy({}, { get: (e, t) => {
				throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`);
			} })) : this.auth = this._initSupabaseAuthClient(o.auth ?? {}, this.headers, o.global.fetch), this.fetch = Ms(t, this._getAccessToken.bind(this), o.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({
				headers: this.headers,
				accessToken: this._getAccessToken.bind(this)
			}, o.realtime)), this.rest = new fa(new URL("rest/v1", r).href, {
				headers: this.headers,
				schema: o.db.schema,
				fetch: this.fetch
			}), this.storage = new vs(this.storageUrl.href, this.headers, this.fetch, n?.storage), o.accessToken || this._listenForAuthEvents();
		}
		get functions() {
			return new ta(this.functionsUrl.href, {
				headers: this.headers,
				customFetch: this.fetch
			});
		}
		from(e) {
			return this.rest.from(e);
		}
		schema(e) {
			return this.rest.schema(e);
		}
		rpc(e, t = {}, n = {
			head: !1,
			get: !1,
			count: void 0
		}) {
			return this.rest.rpc(e, t, n);
		}
		channel(e, t = { config: {} }) {
			return this.realtime.channel(e, t);
		}
		getChannels() {
			return this.realtime.getChannels();
		}
		removeChannel(e) {
			return this.realtime.removeChannel(e);
		}
		removeAllChannels() {
			return this.realtime.removeAllChannels();
		}
		async _getAccessToken() {
			if (this.accessToken) return await this.accessToken();
			let { data: e } = await this.auth.getSession();
			return e.session?.access_token ?? this.supabaseKey;
		}
		_initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: n, storage: r, userStorage: i, storageKey: a, flowType: o, lock: s, debug: c }, l, u) {
			let d = {
				Authorization: `Bearer ${this.supabaseKey}`,
				apikey: `${this.supabaseKey}`
			};
			return new su({
				url: this.authUrl.href,
				headers: Object.assign(Object.assign({}, d), l),
				storageKey: a,
				autoRefreshToken: e,
				persistSession: t,
				detectSessionInUrl: n,
				storage: r,
				userStorage: i,
				flowType: o,
				lock: s,
				debug: c,
				fetch: u,
				hasCustomAuthorizationHeader: Object.keys(this.headers).some((e) => e.toLowerCase() === "authorization")
			});
		}
		_initRealtimeClient(e) {
			return new so(this.realtimeUrl.href, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e?.params) }));
		}
		_listenForAuthEvents() {
			return this.auth.onAuthStateChange((e, t) => {
				this._handleTokenChanged(e, "CLIENT", t?.access_token);
			});
		}
		_handleTokenChanged(e, t, n) {
			(e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== n ? (this.changedAccessToken = n, this.realtime.setAuth(n)) : e === "SIGNED_OUT" && (this.realtime.setAuth(), t == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
		}
	};
})), du = /* @__PURE__ */ c({
	AuthAdminApi: () => nu,
	AuthApiError: () => tc,
	AuthClient: () => iu,
	AuthError: () => ec,
	AuthImplicitGrantRedirectError: () => sc,
	AuthInvalidCredentialsError: () => oc,
	AuthInvalidJwtError: () => dc,
	AuthInvalidTokenResponseError: () => ac,
	AuthPKCEGrantCodeExchangeError: () => cc,
	AuthRetryableFetchError: () => lc,
	AuthSessionMissingError: () => ic,
	AuthUnknownError: () => nc,
	AuthWeakPasswordError: () => uc,
	CustomAuthError: () => rc,
	FunctionRegion: () => $i,
	FunctionsError: () => Yi,
	FunctionsFetchError: () => Xi,
	FunctionsHttpError: () => Qi,
	FunctionsRelayError: () => Zi,
	GoTrueAdminApi: () => ml,
	GoTrueClient: () => eu,
	NavigatorLockAcquireTimeoutError: () => xl,
	PostgrestError: () => _a,
	REALTIME_CHANNEL_STATES: () => $a,
	REALTIME_LISTEN_TYPES: () => Za,
	REALTIME_POSTGRES_CHANGES_LISTEN_EVENT: () => Xa,
	REALTIME_PRESENCE_LISTEN_EVENTS: () => qa,
	REALTIME_SUBSCRIBE_STATES: () => Qa,
	RealtimeChannel: () => eo,
	RealtimeClient: () => so,
	RealtimePresence: () => Ja,
	SIGN_OUT_SCOPES: () => fl,
	SupabaseClient: () => lu,
	WebSocketFactory: () => ya,
	createClient: () => pu,
	isAuthApiError: () => Ys,
	isAuthError: () => J,
	isAuthImplicitGrantRedirectError: () => Zs,
	isAuthRetryableFetchError: () => Qs,
	isAuthSessionMissingError: () => Xs,
	isAuthWeakPasswordError: () => $s,
	lockInternals: () => yl,
	navigatorLock: () => _l,
	processLock: () => vl
});
function fu() {
	if (typeof window < "u" || typeof process > "u") return !1;
	let e = process.version;
	if (e == null) return !1;
	let t = e.match(/^v(\d+)\./);
	return t ? parseInt(t[1], 10) <= 18 : !1;
}
var pu, mu = o((() => {
	uu(), ou(), va(), ra(), lo(), pu = (e, t, n) => new lu(e, t, n), fu() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
})), hu;
function gu() {
	return hu ??= Promise.resolve().then(() => (mu(), du)).then(({ createClient: e }) => e(ei.url, ei.key, { auth: {
		persistSession: !0,
		autoRefreshToken: !0,
		detectSessionInUrl: !1,
		flowType: "pkce",
		storageKey: "roy-top-auth"
	} }));
}
// src/libs/account-blog-url.mjs
function _u(e) {
	if (typeof e != "string") return "";
	let t = e.trim();
	if (!t) return "";
	/^[a-z][a-z0-9+.-]*:/i.test(t) || (t = "https://" + t);
	try {
		let e = new URL(t);
		return !["http:", "https:"].includes(e.protocol) || e.username || e.password || !e.hostname.includes(".") || /[\s<>"\\]/.test(t) || e.href.length > 2048 ? "" : e.href;
	} catch {
		return "";
	}
}
// src/libs/account-auth-flow.mjs
var vu = (e) => /[A-Z]/.test(e) && /[a-z]/.test(e);
function yu(e) {
	if (e.error) throw e.error;
	return e.data;
}
async function bu(e, t) {
	return yu(await e.auth.signInWithOtp({
		email: t,
		options: { shouldCreateUser: !1 }
	}));
}
async function xu(e, t, n, r = "") {
	if (!vu(n)) throw { code: "password_case" };
	let i = _u(r);
	if (r.trim() && !i) throw { code: "blog_url_invalid" };
	return yu(await e.auth.signUp({
		email: t,
		password: n,
		options: { data: {
			password_enabled: !0,
			...i ? { registration_blog_url: i } : {}
		} }
	}));
}
async function Su(e, t, n) {
	return yu(await e.auth.signInWithPassword({
		email: t,
		password: n
	}));
}
async function Cu(e, t) {
	if (!vu(t)) throw { code: "password_case" };
	let { user: n } = yu(await e.auth.getUser());
	if (!n?.email_confirmed_at) throw { code: "email_not_confirmed" };
	return yu(await e.auth.updateUser({
		password: t,
		data: { password_enabled: !0 }
	}));
}
// src/libs/account-auth.ts
var wu = class extends HTMLElement {
	api;
	user = null;
	mode = "code";
	pending = "";
	registration = !1;
	reset = !1;
	busy = !1;
	until = 0;
	timer;
	unsubscribe;
	get en() {
		return this.dataset.en === "true";
	}
	t(e, t) {
		return this.en ? t : e;
	}
	el(e) {
		return this.querySelector(e);
	}
	skipped() {
		try {
			return sessionStorage.getItem("roy-password-later-" + this.user?.id) === "1";
		} catch {
			return !1;
		}
	}
	status(e, t = !1) {
		let n = this.el("[data-auth-status]");
		n.textContent = e, n.hidden = !e, n.dataset.error = String(t);
	}
	failure(e) {
		let { code: t, message: n } = e || {};
		return t === "blog_url_invalid" ? this.t("请输入有效的博客网址，也可以暂时留空。", "Enter a valid blog URL, or leave it blank for now.") : t === "password_case" ? this.t("密码需同时包含大写和小写字母。", "Include both uppercase and lowercase letters.") : t === "email_confirmation_required" ? this.t("邮箱验证配置不符合要求，请联系站长。", "Email confirmation must be enabled. Contact the site owner.") : t === "invalid_credentials" ? this.t("邮箱或密码不正确。未设置或忘记密码，可使用验证码登录。", "Incorrect email or password. Use an email code if you have not set or have forgotten your password.") : t === "otp_expired" ? this.t("验证码无效或已过期，请重新获取。", "Invalid or expired code. Request a new one.") : t === "email_not_confirmed" ? this.t("请先验证邮箱。", "Please verify your email first.") : t === "weak_password" ? this.t("密码未通过邮箱服务的密码要求：", "The authentication service rejected this password: ") + (n || "") : t === "same_password" ? this.t("这个密码与原密码相同，请换一个。", "Choose a password different from your current password.") : t === "reauthentication_needed" || t === "reauthentication_not_valid" ? this.t("请重新使用邮箱验证码登录后设置密码。", "Sign in again with an email code before setting your password.") : t?.includes("rate_limit") || t === "over_request_rate_limit" ? this.t("请求过于频繁，请稍后再试。", "Too many requests. Please try again later.") : this.t("暂时无法完成操作，请稍后重试。", "Could not complete the request. Please try again later.");
	}
	async connectedCallback() {
		if (this.dataset.bound) return;
		this.dataset.bound = "true";
		let e = this.t.bind(this);
		if (this.innerHTML = `<form data-credentials class="roy-auth-fields">
   <label class="roy-auth-field"><span>${e("邮箱", "Email")}</span><input name="auth-email" type="email" autocomplete="email" maxlength="254" required placeholder="${e("邮箱", "Email")}" /></label>
   <label class="roy-auth-field" data-blog-field hidden><span>${e("博客网址（可选，绑定后公开）", "Blog URL (optional, public when linked)")}</span><input name="auth-blog" type="url" inputmode="url" autocomplete="url" maxlength="2048" placeholder="https://" /></label>
   <label class="roy-auth-field" data-password-field hidden><span>${e("密码", "Password")}</span><input name="auth-password" type="password" autocomplete="current-password" placeholder="${e("密码", "Password")}" /></label>
   <button type="submit" class="roy-auth-primary" data-auth-submit>${e("获取验证码", "Send code")}</button>
  </form>
  <form data-verify class="roy-auth-fields" hidden><p data-target-email class="roy-auth-target"></p><label class="roy-auth-field"><span>${e("邮箱验证码", "Email code")}</span><input name="auth-token" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6,8}" minlength="6" maxlength="8" required placeholder="${e("邮箱验证码", "Email code")}" /></label><button type="submit" class="roy-auth-primary">${e("验证并登录", "Verify & sign in")}</button></form>
  <form data-set-password hidden><p class="roy-auth-setup-title">${e("为账号设置密码", "Set an account password")}</p><div class="roy-auth-fields"><label class="roy-auth-field"><span>${e("新密码", "New password")}</span><input name="new-password" type="password" autocomplete="new-password" minlength="6" required placeholder="${e("新密码", "New password")}" /></label><label class="roy-auth-field"><span>${e("确认密码", "Confirm password")}</span><input name="confirm-password" type="password" autocomplete="new-password" minlength="6" required placeholder="${e("再次输入密码", "Enter password again")}" /></label><button type="submit" class="roy-auth-primary">${e("保存密码", "Save password")}</button></div><button type="button" data-skip class="roy-auth-link">${e("稍后设置", "Set up later")}</button></form>
  <p data-password-hint class="roy-auth-hint" hidden>${e("密码需包含大小写字母；邮箱服务最低要求为 6 位。", "Include uppercase and lowercase letters; the email service requires at least 6 characters.")}</p>
  <p data-auth-status class="roy-auth-status" role="status" aria-live="polite" hidden></p>
  <div class="roy-auth-links" data-auth-links><a href="${this.en ? "/en" : ""}/terms/privacy-policy">${e("隐私说明", "Privacy")}</a><button type="button" data-mode-switch>${e("使用密码", "Use password")}</button><button type="button" data-enter-code hidden>${e("已有验证码", "Enter existing code")}</button><button type="button" data-register>${e("注册账号", "Create account")}</button><button type="button" data-forgot hidden>${e("忘记密码", "Forgot password")}</button><button type="button" data-resend hidden></button><button type="button" data-change hidden>${e("更换邮箱", "Change email")}</button></div>`, this.el("[data-credentials]").addEventListener("submit", (e) => {
			e.preventDefault(), this.submitCredentials();
		}), this.el("[data-verify]").addEventListener("submit", (e) => {
			e.preventDefault(), this.verify();
		}), this.el("[data-set-password]").addEventListener("submit", (e) => {
			e.preventDefault(), this.savePassword();
		}), this.el("[data-mode-switch]").addEventListener("click", () => this.switchMode(this.mode === "password" || this.mode === "register" ? "code" : "password")), this.el("[data-enter-code]").addEventListener("click", () => {
			let e = this.el("[name=auth-email]");
			e.reportValidity() && (this.pending = e.value.trim(), this.registration = !1, this.status(""), this.paint(), this.el("[name=auth-token]").focus());
		}), this.el("[data-register]").addEventListener("click", () => this.switchMode("register")), this.el("[data-forgot]").addEventListener("click", () => {
			this.switchMode("code"), this.reset = !0, this.status(e("验证邮箱后可重新设置密码。", "Verify your email to set a new password."));
		}), this.el("[data-resend]").addEventListener("click", () => {
			this.resend();
		}), this.el("[data-change]").addEventListener("click", () => this.switchMode(this.registration ? "register" : "code")), this.el("[data-skip]").addEventListener("click", () => {
			if (!this.busy) {
				try {
					sessionStorage.setItem("roy-password-later-" + this.user?.id, "1");
				} catch {}
				this.el("[name=new-password]").value = "", this.el("[name=confirm-password]").value = "", this.reset = !1, this.mode = "code", this.paint(), this.complete();
			}
		}), this.timer = setInterval(() => this.tick(), 1e3), this.paint(), !ei.configured || location.protocol === "file:") this.status(e("请通过网站地址打开后登录。", "Open the website address to sign in."));
		else try {
			this.api = await gu();
			let { data: e, error: t } = await this.api.auth.getSession();
			if (t) throw t;
			this.user = e.session?.user || null;
			let { data: n } = this.api.auth.onAuthStateChange((e, t) => {
				if (!t?.user && this.user) {
					try {
						sessionStorage.removeItem("roy-password-later-" + this.user.id);
					} catch {}
					this.mode = "code", this.pending = "", this.registration = !1, this.reset = !1;
					for (let e of this.querySelectorAll("input[type=password]")) e.value = "";
					this.status("");
				}
				this.user = t?.user || null, this.paint();
			});
			this.unsubscribe = () => n.subscription.unsubscribe(), this.paint();
		} catch (e) {
			this.status(this.failure(e), !0);
		}
	}
	disconnectedCallback() {
		clearInterval(this.timer), this.unsubscribe?.(), delete this.dataset.bound;
	}
	complete() {
		this.dispatchEvent(new CustomEvent("roy-auth-complete", {
			bubbles: !0,
			detail: { user: this.user }
		}));
	}
	switchMode(e) {
		this.busy || (this.mode = e, this.pending = "", this.registration = !1, this.reset = !1, this.el("[name=auth-password]").value = "", this.el("[name=auth-token]").value = "", this.status(""), this.paint());
	}
	paint() {
		if (!this.querySelector("[data-credentials]")) return;
		let e = !!this.user && (this.reset || !this.user.user_metadata?.password_enabled && !this.skipped() && this.mode !== "password");
		this.hidden = !!this.user && !e, this.dataset.mode = e ? "setup" : this.mode, this.el("[data-credentials]").hidden = !!this.user || !!this.pending, this.el("[data-verify]").hidden = !!this.user || !this.pending, this.el("[data-set-password]").hidden = !e, this.el("[data-auth-links]").hidden = !!this.user, this.el("[data-blog-field]").hidden = this.mode !== "register", this.el("[data-password-field]").hidden = this.mode === "code";
		let t = this.el("[name=auth-password]");
		t.required = this.mode !== "code", t.autocomplete = this.mode === "register" ? "new-password" : "current-password", this.mode === "register" ? t.minLength = 6 : t.removeAttribute("minlength"), this.el("[data-password-hint]").hidden = !e && this.mode !== "register", this.el("[data-mode-switch]").textContent = this.mode === "code" ? this.t("使用密码", "Use password") : this.t("使用验证码", "Use code"), this.el("[data-enter-code]").hidden = !this.hasAttribute("data-existing-code") || this.mode !== "code" || !!this.pending, this.el("[data-register]").hidden = this.mode === "register" || !!this.pending, this.el("[data-forgot]").hidden = this.mode !== "password" || !!this.pending, this.el("[data-mode-switch]").hidden = !!this.pending, this.el("[data-change]").hidden = !this.pending, this.el("[data-resend]").hidden = !this.pending, this.el("[data-target-email]").textContent = this.pending;
		for (let e of this.querySelectorAll("input")) e.disabled = this.busy;
		for (let e of this.querySelectorAll("button")) e.disabled = this.busy;
		this.tick();
	}
	tick() {
		if (!this.querySelector("[data-auth-submit]")) return;
		let e = Math.max(0, Math.ceil((this.until - Date.now()) / 1e3)), t = this.el("[data-auth-submit]"), n = this.el("[data-resend]");
		t.textContent = this.mode === "password" ? this.t("密码登录", "Sign in") : this.mode === "register" ? this.t("注册并获取验证码", "Register & send code") : this.t("获取验证码", "Send code"), t.disabled = this.busy || this.mode !== "password" && e > 0, n.textContent = e ? this.t(`${e} 秒后重发`, `Resend in ${e}s`) : this.t("重新获取验证码", "Resend code"), n.disabled = this.busy || e > 0;
	}
	async run(e) {
		if (!this.busy && this.api) {
			this.busy = !0, this.paint();
			try {
				await e();
			} catch (e) {
				this.status(this.failure(e), !0);
			} finally {
				this.busy = !1, this.paint();
			}
		}
	}
	async submitCredentials() {
		let e = this.el("[name=auth-email]").value.trim(), t = this.el("[name=auth-password]").value;
		this.mode !== "password" && this.until > Date.now() || await this.run(async () => {
			if (this.mode === "password") {
				let n = await Su(this.api, e, t);
				this.user = n.user, this.el("[name=auth-password]").value = "", this.complete();
			} else {
				if (this.mode === "register") {
					let n = await xu(this.api, e, t, this.el("[name=auth-blog]").value);
					if (this.el("[name=auth-password]").value = "", n.user?.identities?.length === 0) {
						this.switchAfterRequest("code"), this.status(this.t("该邮箱可能已经注册，请使用验证码登录。", "This email may already be registered. Sign in with an email code."));
						return;
					}
					if (n.session) throw await this.api.auth.signOut({ scope: "local" }), { code: "email_confirmation_required" };
					this.registration = !0;
				} else {
					try {
						await bu(this.api, e);
					} catch (e) {
						if ([
							"otp_disabled",
							"user_not_found",
							"signup_disabled"
						].includes(e.code) || /signups not allowed for otp/i.test(e.message || "")) {
							this.switchAfterRequest("register"), this.status(this.t("新账号请先设置密码，再获取注册验证码。", "Set a password before requesting your registration code."));
							return;
						}
						throw e;
					}
					this.registration = !1;
				}
				this.pending = e, this.until = Date.now() + 6e4, this.status(this.t("验证码已发送，请查看邮箱。", "Code sent. Please check your inbox.")), setTimeout(() => this.el("[name=auth-token]").focus(), 0);
			}
		});
	}
	switchAfterRequest(e) {
		this.mode = e, this.pending = "", this.el("[name=auth-password]").value = "";
	}
	async verify() {
		let e = this.el("[name=auth-token]").value.trim();
		await this.run(async () => {
			let { data: t, error: n } = await this.api.auth.verifyOtp({
				email: this.pending,
				token: e,
				type: "email"
			});
			if (n) throw n;
			this.user = t.user, this.pending = "", this.el("[name=auth-token]").value = "", this.user && (this.reset || !this.user.user_metadata?.password_enabled && !this.skipped() && this.mode !== "password") ? this.status(this.t("邮箱已验证，可以设置密码；也可以稍后设置。", "Email verified. Set a password now or choose later.")) : (this.status(""), this.complete());
		});
	}
	async resend() {
		this.until > Date.now() || await this.run(async () => {
			let e = this.registration ? await this.api.auth.resend({
				type: "signup",
				email: this.pending
			}) : await this.api.auth.signInWithOtp({
				email: this.pending,
				options: { shouldCreateUser: !1 }
			});
			if (e.error) throw e.error;
			this.until = Date.now() + 6e4, this.status(this.t("验证码已重新发送。", "A new code has been sent."));
		});
	}
	async savePassword() {
		let e = this.el("[name=new-password]").value;
		e === this.el("[name=confirm-password]").value ? await this.run(async () => {
			let t = await Cu(this.api, e);
			this.user = t.user, this.reset = !1, this.el("[name=new-password]").value = "", this.el("[name=confirm-password]").value = "", this.status(""), this.complete();
		}) : this.status(this.t("两次输入的密码不一致。", "Passwords do not match."), !0);
	}
};
customElements.get("roy-account-auth") || customElements.define("roy-account-auth", wu);
// src/libs/moments-style.ts
var Tu = [
	{
		value: "sunny",
		zh: "晴天",
		en: "Sunny",
		path: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"
	},
	{
		value: "cloudy",
		zh: "多云",
		en: "Cloudy",
		path: "M7 18h10a4 4 0 1 0-.5-8 6 6 0 0 0-11.4 1.5A3.3 3.3 0 0 0 7 18Z"
	},
	{
		value: "rainy",
		zh: "下雨",
		en: "Rainy",
		path: "M7 14h10a3.5 3.5 0 1 0-.5-7 5 5 0 0 0-9.5 1A3 3 0 0 0 7 14Zm1 3-1 3m6-3-1 3m6-3-1 3"
	},
	{
		value: "windy",
		zh: "有风",
		en: "Windy",
		path: "M3 8h12a3 3 0 1 0-3-3M3 12h16a2 2 0 1 1-2 2M3 16h8a3 3 0 1 1-3 3"
	},
	{
		value: "snowy",
		zh: "下雪",
		en: "Snowy",
		path: "M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 3 3-3M9 20l3-3 3 3M4 10l4-1-1-4m10 14-1-4 4-1M4 14l4 1-1 4M17 5l-1 4 4 1"
	}
], Eu = [
	{
		value: "paper",
		zh: "原色",
		en: "Paper",
		swatch: "#fff9ee"
	},
	{
		value: "apricot",
		zh: "杏黄",
		en: "Apricot",
		swatch: "#efcb83"
	},
	{
		value: "clay",
		zh: "陶土粉",
		en: "Terracotta",
		swatch: "#d8a08c"
	},
	{
		value: "sage",
		zh: "鼠尾草绿",
		en: "Sage",
		swatch: "#a9bdab"
	},
	{
		value: "mist",
		zh: "雾蓝灰",
		en: "Mist blue",
		swatch: "#a9b9c3"
	},
	{
		value: "rose",
		zh: "玫瑰棕",
		en: "Dusty rose",
		swatch: "#b6a4ad"
	},
	{
		value: "forest",
		zh: "森林绿",
		en: "Forest",
		swatch: "#527366"
	}
], Du = "moment-photos";
function Ou(e) {
	return typeof e == "string" && /^[0-9a-f-]{36}\/[0-9a-f-]{36}\.webp$/.test(e);
}
function ku(e) {
	return e >= 1048576 ? (e / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(e / 1024)) + " KB";
}
var Au;
async function ju(e, t, n) {
	if (Au !== !1) {
		let t;
		try {
			t = await new Promise((t) => e.toBlob(t, "image/webp", n));
		} catch {}
		if (t?.type === "image/webp") return Au = !0, t;
		Au = !1;
	}
	try {
		let { default: r } = await import(
			/* @vite-ignore */
			"/shared/webp-encoder/encode.js?v=1.5.0"
);
		return await r(t.getImageData(0, 0, e.width, e.height), Math.round(n * 100));
	} catch (e) {
		throw Error("photo-webp", { cause: e });
	}
}
async function Mu(e) {
	if (!e || !e.size) throw Error("photo-format");
	let t = (e.type || "").toLowerCase().split(";")[0];
	if (![
		"image/jpeg",
		"image/jpg",
		"image/pjpeg",
		"image/png",
		"image/webp",
		"image/avif",
		"image/heic",
		"image/heif"
	].includes(t) && !/\.(jpe?g|png|webp|avif|heic|heif)$/i.test(e.name || "")) throw Error("photo-format");
	if (e.size > 33554432) throw Error("photo-file-size");
	let n, r = "";
	try {
		try {
			n = await createImageBitmap(e, { imageOrientation: "from-image" });
		} catch {
			r = URL.createObjectURL(e), n = new Image(), n.src = r;
			try {
				await n.decode();
			} catch (e) {
				throw Error("photo-decode", { cause: e });
			}
		}
		let t = n.naturalWidth || n.width, i = n.naturalHeight || n.height;
		if (!t || !i || t * i > 128e6) throw Error("photo-dimensions");
		let a = document.createElement("canvas"), o = a.getContext("2d");
		if (!o) throw Error("photo-canvas");
		let s = Math.min(1, 1600 / Math.max(t, i)), c;
		for (let r = 0; r < 5; r++) {
			a.width = Math.max(1, Math.round(t * s)), a.height = Math.max(1, Math.round(i * s)), o.imageSmoothingEnabled = !0, o.imageSmoothingQuality = "high", o.drawImage(n, 0, 0, a.width, a.height);
			for (let t of [
				.82,
				.72,
				.62
			]) {
				if (c = await ju(a, o, t), !c || c.type !== "image/webp") throw Error("photo-webp");
				if (c.size <= 163840) return {
					blob: c,
					width: a.width,
					height: a.height,
					originalBytes: e.size
				};
			}
			s *= .8;
		}
		if (!c || c.size > 262144) throw Error("photo-size");
		return {
			blob: c,
			width: a.width,
			height: a.height,
			originalBytes: e.size
		};
	} finally {
		n?.close?.(), r && URL.revokeObjectURL(r);
	}
}
// src/libs/account-blog.ts
var Nu = /* @__PURE__ */ new Map();
function Pu(e) {
	let t = Nu.get(e.dataset.blogWebsite || "");
	e.hidden = !1, t ? (e.href = t, e.textContent = t.replace(/^https?:\/\//, "").replace(/\/$/, ""), e.target = "_blank", e.rel = "noopener noreferrer") : (e.href = "#", e.textContent = e.dataset.blogPlaceholder || "绑定网址");
}
function Fu(e, t = !1) {
	let n = document.createElement("a");
	return n.className = "roy-blog-website", n.dataset.blogWebsite = e || "", n.dataset.blogPlaceholder = t ? "Link website" : "绑定网址", Pu(n), n;
}
function Iu() {
	document.querySelectorAll("[data-blog-website]").forEach(Pu), document.querySelectorAll("[data-blog-badge]").forEach((e) => {
		e.hidden = !Nu.has(e.dataset.blogBadge || "");
	}), document.querySelectorAll("[data-blog-avatar]").forEach((e) => {
		let t = Nu.get(e.dataset.blogAvatar || "");
		t ? (e.href = t, e.target = "_blank", e.rel = "noopener noreferrer", e.setAttribute("aria-label", e.dataset.blogLabel || "Visit blog")) : (e.removeAttribute("href"), e.removeAttribute("target"), e.removeAttribute("aria-label"));
	});
}
function Lu(e, t = !1) {
	let n = document.createElement("span");
	return n.className = "roy-blog-badge", n.dataset.blogBadge = e || "", n.hidden = !Nu.has(e || ""), n.setAttribute("role", "img"), n.setAttribute("aria-label", t ? "Blog linked" : "已绑定博客"), n.title = t ? "Blog linked" : "已绑定博客", n;
}
function Ru(e, t, n, r = !1) {
	let i = document.createElement("a");
	i.className = "roy-blog-avatar-link", i.dataset.blogAvatar = t || "", i.dataset.blogLabel = r ? `Visit ${n}’s blog` : `访问 ${n} 的博客`, i.append(e);
	let a = Nu.get(t || "");
	return a && (i.href = a, i.target = "_blank", i.rel = "noopener noreferrer", i.setAttribute("aria-label", i.dataset.blogLabel)), i;
}
async function zu(e, t) {
	let n = [...new Set(t.filter((e) => !!e))];
	for (let t = 0; t < n.length; t += 50) {
		let r = n.slice(t, t + 50);
		try {
			let { data: t, error: n } = await e.from("roy_top_blogs").select("user_id,blog_url").in("user_id", r).abortSignal(AbortSignal.timeout(1e4));
			if (n) continue;
			r.forEach((e) => Nu.delete(e));
			for (let e of t || []) {
				let t = _u(e.blog_url);
				t && Nu.set(e.user_id, t);
			}
		} catch {}
	}
	Iu();
}
var Bu = class extends HTMLElement {
	api;
	user = null;
	version = 0;
	stop;
	busy = !1;
	get en() {
		return this.dataset.en === "true";
	}
	t(e, t) {
		return this.en ? t : e;
	}
	el(e) {
		return this.querySelector(e);
	}
	status(e) {
		this.el("[data-blog-status]").textContent = e;
	}
	async connectedCallback() {
		if (this.dataset.ready) return;
		this.dataset.ready = "true", this.hidden = !0;
		let e = document.createElement("template");
		e.innerHTML = `<div class="roy-blog-settings-row"><button type="button" data-blog-edit></button><a data-blog-current target="_blank" rel="noopener noreferrer" hidden></a></div><form data-blog-form hidden><label class="roy-blog-input-label">${this.t("博客网址（公开）", "Blog URL (public)")}<input name="blog-url" type="url" inputmode="url" autocomplete="url" maxlength="2048" placeholder="https://" /></label><p class="roy-blog-hint">${this.t("绑定后，其他人可点击你的头像访问博客。", "Once linked, others can visit your blog by clicking your avatar.")}</p><div class="roy-blog-settings-row"><button type="submit">${this.t("保存网址", "Save URL")}</button><button type="button" data-blog-cancel>${this.t("取消", "Cancel")}</button><button type="button" data-blog-remove hidden>${this.t("解除绑定", "Unlink")}</button></div></form><p data-blog-status class="roy-blog-status" role="status" aria-live="polite"></p>`, this.replaceChildren(e.content.cloneNode(!0)), this.el("[data-blog-edit]").addEventListener("click", () => {
			this.el("[data-blog-form]").hidden = !1, this.el("[name=blog-url]").focus(), this.status("");
		}), this.el("[data-blog-current]").addEventListener("click", (e) => {
			e.preventDefault(), this.el("[data-blog-edit]").click();
		}), this.el("[data-blog-cancel]").addEventListener("click", () => {
			this.el("[data-blog-form]").hidden = !0, this.status("");
		}), this.el("[data-blog-remove]").addEventListener("click", () => void this.save(!0)), this.el("[data-blog-form]").addEventListener("submit", (e) => {
			e.preventDefault(), e.stopPropagation(), this.save(!1);
		});
		try {
			this.api = await gu();
			let { data: e } = await this.api.auth.getSession(), { data: t } = this.api.auth.onAuthStateChange((e, t) => setTimeout(() => {
				this.isConnected && this.user?.id !== t?.user.id && this.identity(t?.user ?? null);
			}, 0));
			this.stop = () => t.subscription.unsubscribe(), await this.identity(e.session?.user ?? null);
		} catch {
			this.hidden = !0;
		}
	}
	disconnectedCallback() {
		this.stop?.(), this.version++;
	}
	async identity(e) {
		let t = ++this.version;
		this.user = e, this.hidden = !e, this.el("[data-blog-form]").hidden = !0, this.status(""), e && (await zu(this.api, [e.id]), t === this.version && this.paint());
	}
	paint() {
		let e = Nu.get(this.user?.id || "") || "";
		this.el("[data-blog-edit]").textContent = this.t(e ? "修改博客网址" : "绑定网址", e ? "Edit blog URL" : "Link website"), this.el("[data-blog-edit]").hidden = !!e;
		let t = this.el("[data-blog-current]");
		t.hidden = !e, t.textContent = e, t.title = this.t("点击修改博客网址", "Click to edit your blog URL"), t.removeAttribute("target"), e ? t.href = e : t.removeAttribute("href"), this.el("[name=blog-url]").value = e, this.el("[data-blog-remove]").hidden = !e, this.querySelectorAll("button").forEach((e) => e.disabled = this.busy);
	}
	async save(e) {
		let t = this.user;
		if (!t || this.busy) return;
		let n = _u(this.el("[name=blog-url]").value);
		if (!e && !n) this.status(this.t("请输入有效的 http:// 或 https:// 博客网址。", "Enter a valid http:// or https:// blog URL."));
		else {
			this.busy = !0, this.querySelectorAll("button").forEach((e) => e.disabled = !0);
			try {
				let r = e ? await this.api.from("roy_top_blogs").delete().eq("user_id", t.id) : await this.api.from("roy_top_blogs").upsert({
					user_id: t.id,
					blog_url: n
				}, { onConflict: "user_id" });
				if (r.error) throw r.error;
				if (this.user?.id !== t.id) return;
				e ? Nu.delete(t.id) : Nu.set(t.id, n), Iu(), this.el("[data-blog-form]").hidden = !0, this.status(this.t(e ? "已解除博客绑定。" : "博客网址已绑定。", e ? "Blog unlinked." : "Blog URL linked."));
			} catch {
				this.status(this.t("暂时无法保存博客网址，请稍后重试。", "Could not save your blog URL. Please try again."));
			} finally {
				this.busy = !1, this.user?.id === t.id && this.paint();
			}
		}
	}
};
customElements.get("roy-blog-settings") || customElements.define("roy-blog-settings", Bu);
// src/libs/account-avatar.ts
var Vu = /* @__PURE__ */ new Map(), Hu = (e) => typeof e == "string" && e.length <= 22e3 && /^data:image\/(webp|jpeg);base64,[A-Za-z0-9+/]+={0,2}$/.test(e);
function Uu(e) {
	let t = Vu.get(e.dataset.avatarUser || "");
	e.style.backgroundImage = t ? `url("${t}")` : "", e.style.backgroundSize = "cover", e.style.backgroundPosition = "center", e.textContent = t ? "" : e.dataset.avatarInitial || "R";
}
function Wu(e, t, n = "") {
	let r = document.createElement("span");
	return r.className = "roy-account-avatar " + n, r.dataset.avatarUser = e || "", r.dataset.avatarInitial = [...t][0] || "R", r.setAttribute("aria-hidden", "true"), Uu(r), r;
}
function Gu() {
	document.querySelectorAll("[data-avatar-user]").forEach(Uu);
}
async function Ku(e, t) {
	let n = [...new Set(t.filter((e) => !!e))];
	for (let t = 0; t < n.length; t += 50) {
		let r = n.slice(t, t + 50);
		try {
			let { data: t, error: n } = await e.from("roy_top_avatars").select("user_id,avatar_data").in("user_id", r).abortSignal(AbortSignal.timeout(1e4));
			if (n) continue;
			for (let e of r) Vu.delete(e);
			for (let e of t || []) Hu(e.avatar_data) && Vu.set(e.user_id, e.avatar_data);
		} catch {}
	}
	Gu();
}
function qu(e) {
	return new Promise((t, n) => {
		let r = new FileReader();
		r.onload = () => t(String(r.result)), r.onerror = () => n(Error("read")), r.readAsDataURL(e);
	});
}
async function Ju(e) {
	if (![
		"image/jpeg",
		"image/png",
		"image/webp",
		"image/avif"
	].includes(e.type) || e.size > 33554432 || !e.size) throw Error("format");
	let t = URL.createObjectURL(e), n = new Image();
	n.decoding = "async";
	try {
		await new Promise((e, r) => {
			n.onload = () => e(), n.onerror = () => r(Error("format")), n.src = t;
		});
		let { naturalWidth: e, naturalHeight: r } = n;
		if (!e || !r || e * r > 1e8) throw Error("dimensions");
		let i = Math.min(e, r);
		for (let t of [
			192,
			160,
			128
		]) {
			let a = document.createElement("canvas");
			a.width = a.height = Math.min(t, i);
			let o = a.getContext("2d");
			if (!o) throw Error("canvas");
			o.fillStyle = "#fff", o.fillRect(0, 0, a.width, a.height), o.imageSmoothingEnabled = !0, o.imageSmoothingQuality = "high", o.drawImage(n, (e - i) / 2, (r - i) / 2, i, i, 0, 0, a.width, a.height);
			for (let e of [
				.88,
				.78,
				.68
			]) {
				let t = await new Promise((t) => a.toBlob(t, "image/webp", e));
				if (t && t.type === "image/webp" || (t = await new Promise((t) => a.toBlob(t, "image/jpeg", e))), t && t.size <= 16384) {
					let e = await qu(t);
					if (Hu(e)) return {
						data: e,
						bytes: t.size,
						edge: a.width
					};
				}
			}
		}
		throw Error("size");
	} finally {
		URL.revokeObjectURL(t), n.src = "";
	}
}
var Yu = class extends HTMLElement {
	api;
	user = null;
	version = 0;
	stop;
	busy = !1;
	get en() {
		return this.dataset.en === "true";
	}
	t(e, t) {
		return this.en ? t : e;
	}
	el(e) {
		return this.querySelector(e);
	}
	status(e) {
		this.el("[data-avatar-status]").textContent = e;
	}
	async connectedCallback() {
		if (!this.dataset.ready) {
			this.dataset.ready = "true", this.hidden = !0, this.innerHTML = `<roy-blog-settings data-en="${this.en ? "true" : "false"}"></roy-blog-settings><div class="roy-avatar-settings-row"><span data-avatar-preview></span><div class="roy-avatar-actions"><button type="button" data-avatar-choose>${this.t("设置头像", "Set avatar")}</button><button type="button" data-avatar-remove hidden>${this.t("移除", "Remove")}</button></div><input type="file" accept="image/jpeg,image/png,image/webp,image/avif" hidden /><span data-avatar-status role="status" aria-live="polite"></span></div>`, this.el("[data-avatar-choose]").addEventListener("click", () => {
				this.busy || (this.el("input[type=file]").value = "", this.el("input[type=file]").click());
			}), this.el("input[type=file]").addEventListener("change", () => void this.choose()), this.el("[data-avatar-remove]").addEventListener("click", () => void this.removeAvatar());
			try {
				this.api = await gu();
				let { data: e } = await this.api.auth.getSession(), { data: t } = this.api.auth.onAuthStateChange((e, t) => setTimeout(() => {
					this.isConnected && t?.user.id !== this.user?.id && this.identity(t?.user ?? null);
				}, 0));
				this.stop = () => t.subscription.unsubscribe(), await this.identity(e.session?.user ?? null);
			} catch {
				this.hidden = !0;
			}
		}
	}
	disconnectedCallback() {
		this.stop?.(), this.version++;
	}
	async identity(e) {
		let t = ++this.version;
		if (this.user = e, this.hidden = !e, this.status(""), !e) return;
		let { data: n } = await this.api.from("roy_top_profiles").select("nickname").eq("user_id", e.id).maybeSingle();
		await Ku(this.api, [e.id]), t === this.version && (this.el("[data-avatar-preview]").replaceChildren(Wu(e.id, n?.nickname || "R")), this.updateButtons());
	}
	updateButtons() {
		let e = !!Vu.get(this.user?.id || "");
		this.el("[data-avatar-choose]").textContent = this.t(e ? "更换头像" : "设置头像", e ? "Change avatar" : "Set avatar"), this.el("[data-avatar-remove]").hidden = !e, this.querySelectorAll(".roy-avatar-settings-row button").forEach((e) => e.disabled = this.busy);
	}
	changed(e, t) {
		t ? Vu.set(e, t) : Vu.delete(e), Gu(), window.dispatchEvent(new CustomEvent("roy-avatar-changed", { detail: { userId: e } })), this.updateButtons();
	}
	async choose() {
		let e = this.el("input[type=file]").files?.[0], t = this.user;
		if (e && t && !this.busy) {
			this.busy = !0, this.updateButtons(), this.status(this.t("正在压缩…", "Optimizing…"));
			try {
				let n = await Ju(e);
				if (this.user?.id !== t.id) return;
				this.status(this.t("正在保存…", "Saving…"));
				let { error: r } = await this.api.from("roy_top_avatars").upsert({
					user_id: t.id,
					avatar_data: n.data
				}, { onConflict: "user_id" });
				if (r) throw r;
				if (this.user?.id !== t.id) return;
				this.changed(t.id, n.data), this.status(this.t(`已保存 · ${(n.bytes / 1024).toFixed(1)} KB`, `Saved · ${(n.bytes / 1024).toFixed(1)} KB`));
			} catch (e) {
				this.status(e.code === "PGRST205" ? this.t("头像功能尚未启用，请稍后重试。", "Avatars are not enabled yet.") : this.t("无法保存头像。请使用 32 MB 内的 JPG、PNG 或 WebP 图片，再试一次。", "Could not save. Use a JPG, PNG or WebP image under 32 MB and try again."));
			} finally {
				this.busy = !1, this.updateButtons();
			}
		}
	}
	async removeAvatar() {
		let e = this.user;
		if (e && !this.busy) {
			this.busy = !0, this.updateButtons();
			try {
				let { error: t } = await this.api.from("roy_top_avatars").delete().eq("user_id", e.id);
				if (t) throw t;
				this.user?.id === e.id && (this.changed(e.id), this.status(this.t("已恢复默认头像。", "Default avatar restored.")));
			} catch {
				this.status(this.t("暂时无法移除头像，请重试。", "Could not remove avatar. Please try again."));
			} finally {
				this.busy = !1, this.updateButtons();
			}
		}
	}
};
customElements.get("roy-avatar-settings") || customElements.define("roy-avatar-settings", Yu);
// src/libs/moments-client.ts
function $(e, t = "", n) {
	let r = document.createElement(e);
	return r.className = t, n !== void 0 && (r.textContent = n), r;
}
function Xu(e, t = !1) {
	let n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	for (let [e, r] of Object.entries({
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: t ? "currentColor" : "none",
		stroke: "currentColor",
		"stroke-width": "1.6",
		"aria-hidden": "true"
	})) n.setAttribute(e, r);
	let r = document.createElementNS(n.namespaceURI, "path");
	return r.setAttribute("d", e === "heart" ? "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" : "M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8v.5Z"), n.append(r), n;
}
var Zu = class extends HTMLElement {
	api;
	user;
	nickname = "";
	admin = !1;
	manage = !1;
	canPublish = !1;
	photo;
	photoPreviewURL = "";
	photoBusy = !1;
	photoJob = 0;
	version = 0;
	posts = [];
	composer;
	replyComposers = /* @__PURE__ */ new Map();
	replyForms = /* @__PURE__ */ new Map();
	threads = /* @__PURE__ */ new Map();
	detailId = "";
	detailClosing = !1;
	detailOverflow = "";
	detailOpener;
	get detail() {
		return this.el("[data-detail-dialog]");
	}
	loginOverflow = "";
	loginClosing = !1;
	identityReady = !1;
	pendingAction = null;
	get loginDialog() {
		return this.el(".moment-login");
	}
	resetLogin() {
		this.loginDialog?.open && (this.loginDialog.close(), this.loginDialog.getAnimations().forEach((e) => e.cancel()), this.loginDialog.classList.remove("is-closing"), document.documentElement.style.overflow = this.loginOverflow, this.loginClosing = !1);
	}
	requestLogin(e = null) {
		this.pendingAction = e, this.loginDialog.open || this.loginClosing || (this.resetDetail(), this.loginOverflow = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden", this.el("[data-auth]").hidden = !1, this.loginDialog.showModal(), this.animateOpen(this.loginDialog));
	}
	async closeLogin() {
		this.loginDialog.open && !this.loginClosing && (this.loginClosing = !0, await this.animateClose(this.loginDialog), this.loginDialog.open && (this.pendingAction = null, this.resetLogin(), this.el("[data-compose-open]").focus()));
	}
	finishLogin() {
		if (!this.user || !this.identityReady || !this.querySelector("roy-account-auth")?.hidden) return;
		this.resetLogin();
		let e = this.pendingAction;
		if (this.pendingAction = null, e?.kind === "publish" && this.openPublish(), e?.kind === "reply") {
			let t = this.posts.find((t) => t.id === e.root);
			t && this.openThread(t, t);
		}
	}
	publishOverflow = "";
	publishClosing = !1;
	get publishDialog() {
		return this.el(".moment-publish");
	}
	animateOpen(e) {
		matchMedia("(prefers-reduced-motion: reduce)").matches || (e.style.willChange = "opacity, transform", e.animate([{
			opacity: 0,
			transform: "translateY(8px)"
		}, {
			opacity: 1,
			transform: "translateY(0)"
		}], {
			duration: 240,
			easing: "cubic-bezier(.2,.65,.3,1)"
		}).finished.catch(() => {}).then(() => e.style.removeProperty("will-change")));
	}
	async animateClose(e) {
		if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
			let t = getComputedStyle(e), n = {
				opacity: t.opacity,
				transform: t.transform
			};
			e.getAnimations().filter((t) => t.effect instanceof KeyframeEffect && t.effect.target === e).forEach((e) => e.cancel()), e.classList.add("is-closing"), e.style.willChange = "opacity, transform";
			let r = e.animate([n, {
				opacity: 0,
				transform: "translateY(6px)"
			}], {
				duration: 180,
				easing: "cubic-bezier(.4,0,.7,.3)",
				fill: "forwards"
			});
			await new Promise((e) => {
				let t = setTimeout(e, 240);
				r.finished.catch(() => {}).then(() => {
					clearTimeout(t), e();
				});
			}), e.style.removeProperty("will-change");
		}
	}
	resetPublish() {
		this.publishDialog?.open && (this.publishDialog.close(), this.publishDialog.getAnimations().forEach((e) => e.cancel()), this.publishDialog.classList.remove("is-closing"), document.documentElement.style.overflow = this.publishOverflow, this.publishClosing = !1);
	}
	openPublish() {
		this.user ? this.canPublish && (this.publishClosing || this.detail.open || this.publishDialog.open || (this.publishOverflow = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden", this.publishDialog.showModal(), this.animateOpen(this.publishDialog), this.nickname ? this.composer?.focus() : this.el("[name=nickname]").focus())) : this.requestLogin({ kind: "publish" });
	}
	async closePublish() {
		if (!this.publishDialog.open || this.publishClosing) return;
		let e = this.version;
		this.publishClosing = !0, await this.animateClose(this.publishDialog), this.version === e && this.publishDialog.open && (this.resetPublish(), this.el("[data-compose-open]").focus());
	}
	feeding = !1;
	more = !1;
	poll;
	unsubscribe;
	authObserver;
	get en() {
		return this.dataset.en === "true";
	}
	get titleButton() {
		return this.ownerDocument.querySelector("[data-moments-title]");
	}
	t(e, t) {
		return this.en ? t : e;
	}
	el(e) {
		return this.querySelector(e);
	}
	status(e = "", t = !1) {
		for (let n of this.querySelectorAll("[data-status],[data-compose-status]")) n.textContent = e, n.hidden = !e, n.classList.toggle("text-red-600", t);
	}
	failure(e) {
		let t = e?.code;
		return t === "P0001" ? this.t("发布较频繁，请稍等几秒再试。", "Please wait a few seconds before posting again.") : t === "P0002" ? this.t("这条内容已不可用，请刷新。", "This post is no longer available. Please refresh.") : t === "42501" ? this.t("请先登录，或确认账号拥有此操作权限。", "Sign in or check your permission for this action.") : t === "23514" ? this.t("请先设置昵称，并填写 1–4000 字内容。", "Set your nickname and enter 1–4000 characters.") : t === "23505" ? this.t("昵称已设置，请刷新页面。", "Your nickname is already set. Please refresh.") : t === "otp_expired" ? this.t("验证码无效或已过期，请重新获取。", "The code is invalid or expired. Request another one.") : t === "over_email_send_rate_limit" || t === "over_request_rate_limit" ? this.t("验证码发送频繁，请稍后再试。", "Too many requests. Please try again later.") : t === "PGRST202" ? this.t("Moments数据服务需要更新，暂时无法完成发布。", "The Moments data service needs an update before posting.") : this.t("暂时无法完成操作，请重试。", "Could not complete the request. Please try again.");
	}
	async rpc(e, t = {}) {
		let { data: n, error: r } = await this.api.rpc(e, t);
		if (r) throw r;
		return n;
	}
	button(e, t, n = "moment-action") {
		let r = $("button", n, e);
		return r.type = "button", r.addEventListener("click", () => {
			t();
		}), r;
	}
	async connectedCallback() {
		if (!this.dataset.ready) {
			if (this.dataset.ready = "true", location.protocol === "file:") this.status(this.t("请通过网站地址打开Moments。", "Open Moments through the website address."));
			else if (!ei.configured) this.status(this.t("Moments暂未开放。", "Moments is not available yet."));
			else {
				this.bind();
				try {
					this.api = await gu();
					let { data: e, error: t } = await this.api.auth.getSession();
					if (t) throw t;
					let { data: n } = this.api.auth.onAuthStateChange((e, t) => {
						setTimeout(() => {
							this.isConnected && this.user?.id !== t?.user?.id && this.identity(t?.user ?? null);
						}, 0);
					});
					this.unsubscribe = () => n.subscription.unsubscribe(), await this.identity(e.session?.user ?? null), this.poll = setInterval(() => {
						!document.hidden && !this.hasReplyDraft() && this.loadPosts(!0, !0);
					}, 45e3);
				} catch (e) {
					console.warn("Moments initialization:", e instanceof Error ? e.message : String(e)), this.status(this.failure(e), !0);
				}
			}
		}
	}
	disconnectedCallback() {
		this.clearPhoto(), this.resetLogin(), this.resetPublish(), this.resetDetail(), this.composer?.destroy(), this.clearReplyComposers(), this.unsubscribe?.(), this.authObserver?.disconnect(), clearInterval(this.poll), this.version++;
	}
	clearReplyComposers() {
		for (let e of this.replyComposers.values()) e.destroy();
		this.replyComposers.clear(), this.replyForms.clear();
	}
	resetDetail() {
		this.detail?.open && (this.detail.close(), this.detail.getAnimations().forEach((e) => e.cancel()), this.detail.classList.remove("is-closing"), document.documentElement.style.overflow = this.detailOverflow, this.detailId = "", this.detailClosing = !1);
	}
	async closeDetail() {
		if (!this.detail.open || this.detailClosing) return;
		let e = this.version, t = this.detailId;
		if (this.detailClosing = !0, this.captureDrafts(), await this.animateClose(this.detail), !this.detail.open || this.version !== e || this.detailId !== t) return;
		let n = this.detailId;
		this.resetDetail(), this.querySelector(`[data-id="${n}"] .moment-cover`)?.focus({ preventScroll: !0 });
	}
	showDetail(e, t) {
		if (this.detailClosing) return;
		this.detailId = e.id, this.detailOpener = t, this.detail.classList.toggle("has-photo", !!this.photoSource(e)), this.el("#moment-detail-title").textContent = this.t(`“${e.author_name}”的这一刻`, `${e.author_name}’s moment`);
		let n = this.card(e, e, !1, !0), r = $("section", "moment-thread");
		r.dataset.thread = e.id, r.hidden = !this.threads.get(e.id)?.open, (n.querySelector(".moment-detail-copy") || n).append(r), this.el("[data-detail-content]").replaceChildren(n), r.hidden || this.renderThread(e);
		let i = t?.querySelector("img"), a = n.querySelector(".moment-detail-photo img");
		i?.naturalWidth && i.naturalHeight && a && (a.width = i.naturalWidth, a.height = i.naturalHeight, n.style.setProperty("--moment-image-ratio", String(i.naturalWidth / i.naturalHeight))), this.detail.open || (this.detailOverflow = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden", this.detail.showModal(), this.el("[data-detail-content]").scrollTop = 0, this.animateOpen(this.detail));
	}
	bind() {
		this.el("[data-app]").hidden = !1, this.el("[data-login-close]").addEventListener("click", () => {
			this.closeLogin();
		}), this.loginDialog.addEventListener("cancel", (e) => {
			e.preventDefault(), this.closeLogin();
		}), this.loginDialog.addEventListener("click", (e) => {
			if (e.target === this.loginDialog) {
				let t = this.loginDialog.getBoundingClientRect();
				(e.clientX < t.left || e.clientX > t.right || e.clientY < t.top || e.clientY > t.bottom) && this.closeLogin();
			}
		}), this.addEventListener("roy-auth-complete", () => this.finishLogin()), this.el("[data-compose-open]").addEventListener("click", () => this.openPublish()), this.el("[data-compose-close]").addEventListener("click", () => {
			this.closePublish();
		}), this.publishDialog.addEventListener("cancel", (e) => {
			e.preventDefault(), this.closePublish();
		}), this.publishDialog.addEventListener("click", (e) => {
			if (e.target === this.publishDialog) {
				let t = this.publishDialog.getBoundingClientRect();
				(e.clientX < t.left || e.clientX > t.right || e.clientY < t.top || e.clientY > t.bottom) && this.closePublish();
			}
		}), this.el("[data-detail-close]").addEventListener("click", () => {
			this.closeDetail();
		}), this.detail.addEventListener("cancel", (e) => {
			e.preventDefault(), this.closeDetail();
		}), this.detail.addEventListener("click", (e) => {
			if (e.target === this.detail) {
				let t = this.detail.getBoundingClientRect();
				(e.clientX < t.left || e.clientX > t.right || e.clientY < t.top || e.clientY > t.bottom) && this.closeDetail();
			}
		}), this.composer = Zr(this.el("#moment-body"), {
			en: this.en,
			limit: 4e3
		}), this.el("[data-photo-choose]").addEventListener("click", () => this.el("[data-photo-input]").click()), this.el("[data-photo-remove]").addEventListener("click", () => this.clearPhoto()), this.el("[data-photo-input]").addEventListener("change", (e) => {
			let t = e.target, n = t.files?.[0];
			t.value = "", n && this.choosePhoto(n);
		});
		let e = this.el("[data-compose] .roy-rich-footer");
		e.before(this.el(".moment-options"));
		let t = $("div", "moment-photo-tool");
		t.append(this.el("[data-photo-choose]"), this.el("[data-weather-toggle]")), e.prepend(t);
		let n = this.el(".moment-photo-picker");
		n.hidden = !0, this.el("[data-compose] .roy-rich-editor").after(n);
		for (let e of ["weather", "color"]) {
			let t = this.el(`[data-${e}-toggle]`), n = this.el(`#moment-${e}-picker`);
			t.addEventListener("click", () => {
				let e = n.hidden;
				for (let e of ["weather", "color"]) this.el(`#moment-${e}-picker`).hidden = !0, this.el(`[data-${e}-toggle]`).setAttribute("aria-expanded", "false");
				n.hidden = !e, t.setAttribute("aria-expanded", String(e));
			}), n.addEventListener("change", () => {
				this.syncStyleChoices(), n.hidden = !0, t.setAttribute("aria-expanded", "false"), t.focus();
			});
		}
		this.el("[data-profile]").addEventListener("submit", (e) => {
			e.preventDefault(), this.saveProfile();
		}), this.el("[data-compose]").addEventListener("submit", (e) => {
			e.preventDefault(), this.publish();
		}), this.el("[data-logout]").addEventListener("click", () => {
			this.logout();
		}), this.titleButton?.addEventListener("click", () => {
			this.loadPosts(!0);
		}), this.el("[data-more]").addEventListener("click", () => {
			this.loadPosts(!1);
		}), this.el("[data-manage]").addEventListener("click", () => {
			this.admin && (this.captureDrafts(), this.manage = !this.manage, this.el("[data-manage]").setAttribute("aria-pressed", String(this.manage)), this.el("[data-manage]").textContent = this.manage ? this.t("退出管理", "Leave management mode") : this.t("管理记录", "Manage entries"), this.renderFeed());
		}), this.el("#moment-body").addEventListener("input", () => {
			this.el("[data-length]").textContent = `${this.el("#moment-body").value.length} / 4000`;
		});
	}
	syncStyleChoices() {
		let e = Tu.find((e) => e.value === this.querySelector("[name=moment-weather]:checked")?.value), t = Eu.find((e) => e.value === this.querySelector("[name=moment-color]:checked")?.value) || Eu[0];
		this.el("[data-weather-selected]").textContent = e ? this.en ? e.en : e.zh : this.t("不标注", "None");
		let n = this.el("[data-weather-toggle]"), r = this.t("天气", "Weather") + " · " + this.el("[data-weather-selected]").textContent;
		n.title = r, n.setAttribute("aria-label", r), n.classList.toggle("has-weather", !!e), n.querySelector("path")?.setAttribute("d", (e || Tu.find((e) => e.value === "cloudy")).path), this.el("[data-color-selected]").textContent = this.en ? t.en : t.zh, this.el("[data-color-selected-dot]").style.setProperty("--swatch", t.swatch);
	}
	resetStyleChoices() {
		this.el("[name=moment-weather][value=\"\"]").checked = !0, this.el("[name=moment-color][value=paper]").checked = !0, this.syncStyleChoices();
		for (let e of ["weather", "color"]) this.el(`#moment-${e}-picker`).hidden = !0, this.el(`[data-${e}-toggle]`).setAttribute("aria-expanded", "false");
	}
	async identity(e) {
		this.resetStyleChoices(), this.identityReady = !1, this.resetPublish(), this.resetDetail();
		let t = ++this.version;
		this.composer?.clear(), this.clearReplyComposers(), this.user = e, this.nickname = "", this.admin = !1, this.canPublish = !1, this.el("[data-compose-open]").hidden = !0, this.clearPhoto(), this.manage = !1, this.posts = [], this.threads.clear(), this.feeding = !1, this.el("[data-feed]").replaceChildren(), this.el("[data-app]").hidden = !1, this.titleButton && (this.titleButton.disabled = !0, this.titleButton.setAttribute("aria-busy", "false")), this.el("[data-manage]").hidden = !0, this.el("[data-manage]").setAttribute("aria-pressed", "false"), this.el("[data-manage]").textContent = this.t("管理记录", "Manage entries"), this.el("[data-compose] fieldset").disabled = !0;
		let n = this.querySelector("roy-account-auth");
		if (n && !n.hasAttribute("data-observed") && (n.setAttribute("data-observed", "true"), this.authObserver = new MutationObserver(() => this.finishLogin()), this.authObserver.observe(n, {
			attributes: !0,
			attributeFilter: ["hidden"]
		})), !e) this.identityReady = !0, this.el("#moment-body").value = "", this.el("[data-length]").textContent = "0 / 4000", await this.loadPosts(!0);
		else {
			this.status(this.t("正在加载Moments…", "Loading moments…"));
			try {
				let [n, r, i] = await Promise.all([
					this.api.from("roy_top_profiles").select("nickname").eq("user_id", e.id).maybeSingle(),
					this.api.rpc("roy_site_is_admin"),
					this.api.rpc("roy_moments_can_publish")
				]);
				if (t !== this.version) return;
				if (n.error) throw n.error;
				if (r.error) throw r.error;
				this.nickname = n.data?.nickname ?? "", this.admin = r.data === !0, this.canPublish = !i.error && i.data === !0, this.el("[data-compose-open]").hidden = !this.canPublish, this.el("[data-identity]").textContent = this.nickname || this.t("请先设置昵称", "Set your nickname first"), this.querySelector("[data-composer-website]")?.remove();
				let a = Fu(this.user?.id, this.en);
				a.dataset.composerWebsite = "", a.className = "moment-composer-website", a.title = this.t("点击修改博客网址", "Click to edit your blog URL"), a.addEventListener("click", (e) => {
					e.preventDefault();
					let t = this.querySelector(".moment-account-settings");
					t && (t.open = !0), this.querySelector("roy-blog-settings [data-blog-edit]")?.click();
				}), this.el("[data-identity]").after(a), this.el("[data-profile]").hidden = !!this.nickname, this.el("[data-compose] fieldset").disabled = !this.nickname || !this.canPublish;
				let o = this.el("[data-manage]");
				o.hidden = !this.admin, this.admin && !this.canPublish ? this.el("[data-app] section").append(o) : this.el(".moment-account-settings").append(o), this.identityReady = !0, this.el("[data-app]").hidden = !1, await this.loadPosts(!0), this.finishLogin();
			} catch (e) {
				t === this.version && this.status(this.failure(e), !0);
			}
		}
	}
	async saveProfile() {
		let e = this.el("[data-profile]").querySelector("button");
		e.disabled = !0;
		try {
			let e = this.el("[name=nickname]").value.trim();
			if (!e) return;
			let { error: t } = await this.api.from("roy_top_profiles").insert({
				user_id: this.user.id,
				nickname: e
			});
			if (t) throw t;
			await this.identity(this.user), this.openPublish();
		} catch (e) {
			this.status(this.failure(e), !0);
		} finally {
			e.disabled = !1;
		}
	}
	async logout() {
		let { error: e } = await this.api.auth.signOut();
		e ? this.status(this.failure(e), !0) : await this.identity(null);
	}
	clearPhoto() {
		this.photoJob++, this.photoBusy = !1, this.photo = void 0, this.photoPreviewURL && URL.revokeObjectURL(this.photoPreviewURL), this.photoPreviewURL = "", this.el("[data-photo-draft]").hidden = !0, this.el("[data-photo-choose]").hidden = !1, this.el(".moment-photo-picker").hidden = !0, this.el("[data-photo-choose]").disabled = !1, this.el("[data-photo-status]").hidden = !0, this.el("[data-photo-preview]").removeAttribute("src");
	}
	async choosePhoto(e) {
		let t = ++this.photoJob;
		this.photoBusy = !0, this.el(".moment-photo-picker").hidden = !1;
		let n = this.el("[data-photo-status]");
		n.hidden = !1, n.textContent = this.t("正在压缩照片…", "Compressing photograph…"), this.el("[data-photo-choose]").disabled = !0;
		try {
			let r = await Mu(e);
			if (t !== this.photoJob) return;
			this.photoPreviewURL && URL.revokeObjectURL(this.photoPreviewURL), this.photo = r, this.photoPreviewURL = URL.createObjectURL(r.blob), this.el("[data-photo-preview]").src = this.photoPreviewURL, this.el("[data-photo-info]").textContent = `${ku(r.originalBytes)} → ${ku(r.blob.size)} · WebP · ${r.width} × ${r.height}`, this.el("[data-photo-draft]").hidden = !1, this.el("[data-photo-choose]").hidden = !0, n.textContent = this.t("压缩完成，发布时只上传处理后的照片。", "Ready. Only the compressed photograph will be uploaded when you post.");
		} catch (e) {
			if (t === this.photoJob) {
				let t = {
					"photo-file-size": ["这张照片超过32MB，请先导出较小的版本。", "This photo exceeds 32 MB. Export a smaller copy first."],
					"photo-decode": ["浏览器无法读取这张照片，请尝试导出为JPEG或PNG后再添加。", "This browser cannot read the photo. Export it as JPEG or PNG and try again."],
					"photo-dimensions": ["这张照片的像素过大，请先缩小尺寸。", "The photo has too many pixels. Resize it before adding it."],
					"photo-webp": ["照片压缩组件未能加载，请刷新页面后重试。", "The photo compressor could not load. Refresh this page and try again."],
					"photo-size": ["照片暂时无法压缩到256KB以内，请缩小尺寸后重试。", "The photo could not be compressed under 256 KB. Resize it and try again."]
				}[e?.message] || ["无法读取这张图片，请选择JPEG、PNG、WebP或AVIF；HEIC需浏览器支持。", "Choose a JPEG, PNG, WebP or AVIF image. HEIC requires browser support."];
				n.textContent = this.t(...t);
			}
		} finally {
			t === this.photoJob && (this.photoBusy = !1, this.el("[data-photo-choose]").disabled = !1);
		}
	}
	async publish() {
		if (!this.canPublish || !this.user) return;
		let e = this.el("#moment-body"), t = e.value.trim();
		if (!t) {
			this.status(this.t("请为这条记录填写一点文字。", "Please add a few words to your entry."), !0);
			return;
		}
		if (this.photoBusy || this.composer?.busy) {
			this.status(this.t("照片正在处理，请稍等。", "Please wait for image processing."), !0);
			return;
		}
		let n = this.version, r = this.user, i = this.photo, a = this.el("[data-compose] fieldset");
		a.disabled = !0;
		let o = "";
		try {
			if (i) {
				this.status(this.t("正在上传压缩后的照片…", "Uploading the compressed photograph…"));
				let e = `${r.id}/${crypto.randomUUID()}.webp`, { error: t } = await this.api.storage.from(Du).upload(e, i.blob, {
					contentType: "image/webp",
					cacheControl: "31536000",
					upsert: !1
				});
				if (t) throw t;
				o = e;
			}
			if (n !== this.version || (await this.rpc("roy_moment_publish_entry", {
				p_content: this.composer ? this.composer.value() : t,
				p_photo_path: o || null,
				p_width: i?.width ?? null,
				p_height: i?.height ?? null,
				p_bytes: i?.blob.size ?? null,
				p_weather: this.querySelector("[name=moment-weather]:checked")?.value || null
			}), n !== this.version)) return;
			e.value = "", this.composer?.clear(), this.clearPhoto(), this.resetStyleChoices(), this.el("[data-length]").textContent = "0 / 4000", await this.closePublish(), await this.loadPosts(!0);
		} catch (e) {
			let t = e?.code;
			o && t && /^(22|23|42|P000|PGRST202)/.test(t) && await this.api.storage.from(Du).remove([o]).catch(() => {}), n === this.version && this.status(this.failure(e), !0);
		} finally {
			n === this.version && (a.disabled = !this.nickname || !this.canPublish);
		}
	}
	photoSource(e) {
		return Ou(e.photo_path) && this.api ? this.api.storage.from(Du).getPublicUrl(e.photo_path).data.publicUrl : "";
	}
	coverCard(e) {
		let t = $("article", "moment-card moment-photo-card");
		t.dataset.id = e.id;
		let n = this.button("", () => this.showDetail(e, n), "moment-cover");
		n.setAttribute("aria-haspopup", "dialog"), n.setAttribute("aria-label", this.t("展开这条图文记录", "Open this journal entry"));
		let r = this.photoSource(e), i = $("div");
		i.innerHTML = qr(e.body);
		let a = (i.textContent || "").trim().split(/\n/).find((e) => e.trim()) || this.t("这一刻", "A moment");
		if (r) {
			let t = $("img", "moment-cover-image");
			t.src = r, t.alt = a.slice(0, 120), t.loading = "lazy", t.decoding = "async", e.photo_width && e.photo_height && (t.width = e.photo_width, t.height = e.photo_height), t.addEventListener("error", () => {
				n.classList.add("photo-unavailable"), t.hidden = !0, n.prepend($("span", "moment-photo-unavailable", this.t("照片暂时无法显示", "Photo temporarily unavailable")));
			}, { once: !0 }), n.append(t);
		} else n.classList.add("moment-text-cover"), n.append($("span", "moment-text-excerpt", this.t("文字记录", "Text entry")));
		return t.append(n), e.pinned && t.append($("span", "moment-photo-pin", this.t("置顶", "Pinned"))), t;
	}
	hasReplyDraft() {
		return [...this.replyForms].some(([e, t]) => t.contains(this.ownerDocument.activeElement) || !!this.replyComposers.get(e)?.busy || !!t.querySelector("textarea")?.value.trim());
	}
	captureDrafts() {
		for (let [e, t] of this.replyComposers) {
			let n = this.threads.get(e);
			n && (n.draft = t.draft());
		}
	}
	async loadPosts(e, t = !1) {
		if (!this.api || this.feeding) return;
		this.feeding = !0;
		let n = this.version;
		this.titleButton && (this.titleButton.disabled = !0, this.titleButton.setAttribute("aria-busy", "true")), this.el("[data-more]").disabled = !0;
		try {
			let r = await this.rpc("roy_moments_feed", {
				page_size: 20,
				page_offset: e ? 0 : this.posts.length
			});
			if (n !== this.version) return;
			if (!Array.isArray(r)) throw Error("Invalid feed");
			if (this.captureDrafts(), this.posts = e ? r : [...this.posts, ...r.filter((e) => !this.posts.some((t) => t.id === e.id))], this.more = r.length === 20, await Promise.all([Ku(this.api, this.posts.map((e) => e.user_id)), zu(this.api, this.posts.map((e) => e.user_id))]), n !== this.version) return;
			this.renderFeed(), t || this.status();
		} catch (e) {
			n === this.version && !t && this.status(!this.user && e?.code === "42501" ? this.t("游客浏览尚未启用，Moments数据服务需要更新。", "Guest browsing is not enabled yet. The Moments data service needs an update.") : this.failure(e), !0);
		} finally {
			n === this.version && (this.feeding = !1, this.titleButton && (this.titleButton.disabled = !1, this.titleButton.setAttribute("aria-busy", "false")), this.el("[data-more]").disabled = !1);
		}
	}
	metadata(e) {
		let t = $("div", "moment-meta"), n = Ru(Wu(e.user_id, e.author_name, "moment-avatar"), e.user_id, e.author_name, this.en), r = $("div", "min-w-0"), i = $("time", "moment-date");
		i.dateTime = e.created_at, i.textContent = new Date(e.created_at).toLocaleString(this.en ? "en-GB" : "zh-CN", {
			month: "short",
			day: "numeric",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		});
		let a = $("h3", "moment-author roy-blog-name", e.author_name);
		a.append(Lu(e.user_id, this.en)), r.append(a, i);
		let o = Tu.find((t) => t.value === e.weather);
		if (o) {
			let e = $("span", "moment-weather-badge"), t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			for (let [e, n] of Object.entries({
				width: "14",
				height: "14",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "1.5",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			})) t.setAttribute(e, n);
			let n = document.createElementNS(t.namespaceURI, "path");
			n.setAttribute("d", o.path), t.append(n), e.title = this.en ? o.en : o.zh, e.setAttribute("aria-label", e.title), e.append(t), i.after(e);
		}
		let s = r.querySelector(".moment-weather-badge");
		if (s) {
			let e = $("span", "moment-date-row");
			i.before(e), e.append(i, s);
		}
		return t.append(n, r), e.pinned && t.append($("span", "moment-pin", this.t("置顶", "Pinned"))), t;
	}
	card(e, t, n = !1, r = !1) {
		if (!n && !r) return this.coverCard(e);
		let i = $("article", n ? "moment-reply" : "moment-card");
		i.dataset.id = e.id;
		let a = this.photoSource(e);
		if (!n && a) {
			i.classList.add("has-moment-photo");
			let t = $("figure", "moment-detail-photo"), n = $("img");
			n.src = a, n.alt = this.t("这一刻的照片", "A photograph from this moment"), n.decoding = "async", e.photo_width && e.photo_height && (n.width = e.photo_width, n.height = e.photo_height, i.style.setProperty("--moment-image-ratio", String(e.photo_width / e.photo_height))), n.addEventListener("load", () => {
				n.naturalWidth && n.naturalHeight && i.style.setProperty("--moment-image-ratio", String(n.naturalWidth / n.naturalHeight));
			}, { once: !0 }), t.append(n), i.append(t);
		}
		!n && !r && (i.dataset.color = Eu.some((t) => t.value === e.card_color) ? e.card_color : "paper");
		let o = !n && a ? $("div", "moment-detail-copy") : i;
		o !== i && i.append(o), o.append(this.metadata(e)), n && e.parent_id !== e.root_id && o.append($("p", "moment-reply-label", this.t(`回复 @${e.reply_to_name ?? ""}`, `Reply to @${e.reply_to_name ?? ""}`)));
		let s = $("div", "moment-body roy-rich-body");
		s.innerHTML = qr(e.body), Yr(), o.append(s);
		let c = $("div", "moment-actions"), l = this.button("", async () => {
			if (!this.user) {
				this.requestLogin();
				return;
			}
			let t = this.version;
			l.disabled = !0;
			try {
				let n = await this.rpc("roy_moment_like", {
					target_id: e.id,
					value: !e.liked
				});
				if (t !== this.version) return;
				e.like_count = n.count, e.liked = n.liked, u();
			} catch (e) {
				t === this.version && this.status(this.failure(e), !0);
			} finally {
				l.disabled = !1;
			}
		}), u = () => {
			l.replaceChildren(Xu("heart", e.liked), $("span", "", String(e.like_count))), l.setAttribute("aria-pressed", String(e.liked)), l.setAttribute("aria-label", this.t(`${e.liked ? "取消点赞" : "点赞"}，${e.like_count}`, `${e.liked ? "Unlike" : "Like"}, ${e.like_count}`));
		};
		u();
		let d = this.button("", () => this.openThread(t, e));
		if (d.append(Xu("reply"), $("span", "", n ? this.t("回复", "Reply") : this.t(`回复 ${e.reply_count}`, `Replies ${e.reply_count}`))), d.dataset.replyCount = String(!n), c.append(l, d), !n && this.admin && this.manage && c.append(this.button(e.pinned ? this.t("取消置顶", "Unpin") : this.t("置顶", "Pin"), async () => {
			try {
				await this.rpc("roy_moment_manage", {
					target_id: e.id,
					action: "pin",
					value: !e.pinned
				}), await this.loadPosts(!0);
			} catch (e) {
				this.status(this.failure(e), !0);
			}
		})), (e.user_id === this.user?.id || this.admin && this.manage) && c.append(this.button(this.t("删除", "Delete"), async () => {
			if (confirm(this.t("删除这条内容？", "Delete this entry?"))) try {
				if (await this.rpc("roy_moment_manage", {
					target_id: e.id,
					action: "delete"
				}), n) {
					let n = this.threads.get(t.id);
					n.rows = n.rows.filter((t) => t.id !== e.id), n.target.id === e.id && (n.target = t), t.reply_count = Math.max(0, t.reply_count - 1), this.renderFeed();
				} else this.threads.delete(e.id), await this.loadPosts(!0);
			} catch (e) {
				this.status(this.failure(e), !0);
			}
		})), !n && !r) {
			let t = this.button("", () => this.showDetail(e, t), "moment-read-more");
			t.setAttribute("aria-haspopup", "dialog"), t.setAttribute("aria-label", this.t(`查看 ${e.author_name} 的Moments详情`, `Read ${e.author_name}’s moment`)), c.append(t), s.addEventListener("click", (n) => {
				n.target.closest("a,button,input,video,audio") || this.showDetail(e, t);
			});
		}
		return o.append(c), i;
	}
	renderFeed() {
		for (let [e, t] of this.replyComposers) this.posts.some((t) => t.id === e) || (t.destroy(), this.replyComposers.delete(e), this.replyForms.delete(e));
		let e = this.el("[data-feed]"), t = e.scrollLeft;
		e.replaceChildren();
		for (let t of this.posts) {
			let n = $("li");
			n.append(this.card(t, t)), e.append(n);
		}
		if (this.dispatchEvent(new Event("roy-moments-rendered", { bubbles: !0 })), e.scrollLeft = t, this.detail.open) {
			let e = this.posts.find((e) => e.id === this.detailId);
			e ? this.showDetail(e, this.detailOpener) : this.resetDetail();
		}
		this.el("[data-empty]").hidden = !!this.posts.length, this.el("[data-more]").hidden = !this.more;
	}
	async openThread(e, t) {
		if (!this.user) {
			this.requestLogin({
				kind: "reply",
				root: e.id
			});
			return;
		}
		if (this.detailId === e.id && this.detail.open || this.showDetail(e), this.detailClosing) return;
		let n = this.threads.get(e.id);
		n || (n = {
			rows: [],
			more: !1,
			open: !0,
			target: t,
			draft: "",
			loading: !1
		}, this.threads.set(e.id, n)), n.open = !0, n.target = t, this.renderThread(e), n.rows.length || await this.loadReplies(e, !0), this.nickname && this.replyComposers.get(e.id)?.focus();
	}
	renderThread(e) {
		let t = this.querySelector(`[data-thread="${e.id}"]`), n = this.threads.get(e.id);
		if (!t || !n || (t.hidden = !n.open, !n.open)) return;
		t.replaceChildren();
		let r = $("div", "moment-thread-heading");
		r.append($("span", "text-xs text-muted-foreground", this.t("回复 · 最新在前", "Replies · newest first")), this.button(this.t("收起", "Close"), () => {
			n.open = !1, this.renderThread(e);
		})), t.append(r);
		for (let r of n.rows) t.append(this.card(r, e, !0));
		if (n.loading && t.append($("p", "moment-inline-status", this.t("正在加载…", "Loading…"))), n.more) {
			let r = this.button(this.t("更多回复", "More replies"), () => this.loadReplies(e, !1), "moment-button");
			r.disabled = n.loading, t.append(r);
		}
		let i = this.replyForms.get(e.id);
		if (i) {
			i.querySelector("[data-reply-label]").textContent = n.target.id === e.id ? this.t("回复这一刻", "Reply to this moment") : this.t(`回复 @${n.target.author_name}`, `Reply to @${n.target.author_name}`);
			let r = i.querySelector("[data-reset-recipient]");
			r.hidden = n.target.id === e.id, t.append(i);
			return;
		}
		let a = $("form", "moment-reply-form");
		a.dataset.root = e.id;
		let o = $("fieldset");
		o.disabled = !this.nickname;
		let s = $("div", "moment-reply-heading", n.target.id === e.id ? this.t("回复这一刻", "Reply to this moment") : this.t(`回复 @${n.target.author_name}`, `Reply to @${n.target.author_name}`)), c = $("textarea", "moment-input mt-2");
		c.required = !0, c.maxLength = 4e3, c.rows = 3, c.value = "", c.placeholder = this.nickname ? this.t("写下回复…", "Write a reply…") : this.t("请先设置昵称", "Set your nickname first"), c.setAttribute("aria-label", this.t("回复内容", "Reply content"));
		let l = $("span", "", s.textContent || "");
		l.dataset.replyLabel = "", s.replaceChildren(l), o.append(s, c);
		let u = $("div", "mt-3 flex flex-wrap items-center justify-between gap-3"), d = this.button(this.t("取消回复对象", "Reset recipient"), () => {
			n.target = e, this.renderThread(e);
		});
		d.dataset.resetRecipient = "", d.hidden = n.target.id === e.id, s.append(d);
		let f = $("button", "moment-button moment-primary", this.t("回复", "Reply"));
		f.type = "submit", u.append(f), o.append(u), a.append(o);
		let p = $("p", "moment-inline-status");
		p.setAttribute("role", "status"), a.append(p), t.append(a);
		let m = Zr(c, {
			en: this.en,
			limit: 4e3
		});
		u.hidden = !0, this.replyComposers.set(e.id, m), this.replyForms.set(e.id, a), n.draft && m.setValue(n.draft), c.addEventListener("roy-rich-change", () => {
			n.draft = m.draft();
		}), a.addEventListener("submit", (t) => {
			if (t.preventDefault(), !c.value.trim() || m.busy) return;
			let r = this.version;
			o.disabled = !0, (async () => {
				try {
					if (await this.rpc("roy_moment_publish", {
						content: m.value(),
						parent: n.target.id
					}), r !== this.version) return;
					n.draft = "", m.clear(), n.target = e;
					let t = this.posts.find((t) => t.id === e.id) || e;
					t.reply_count++, await this.loadReplies(t, !0);
					for (let n of this.querySelectorAll(`article[data-id="${e.id}"] [data-reply-count="true"] span`)) n.textContent = this.t(`回复 ${t.reply_count}`, `Replies ${t.reply_count}`);
				} catch (e) {
					r === this.version && (p.textContent = this.failure(e));
				} finally {
					r === this.version && (o.disabled = !this.nickname);
				}
			})();
		});
	}
	async loadReplies(e, t) {
		let n = this.threads.get(e.id);
		if (n.loading) return;
		let r = this.version;
		n.loading = !0, this.renderThread(e);
		try {
			let i = await this.rpc("roy_moments_replies", {
				post_id: e.id,
				page_size: 50,
				page_offset: t ? 0 : n.rows.length
			});
			if (r !== this.version) return;
			n.rows = t ? i : [...n.rows, ...i.filter((e) => !n.rows.some((t) => t.id === e.id))], n.more = i.length === 50, await Promise.all([Ku(this.api, i.map((e) => e.user_id)), zu(this.api, i.map((e) => e.user_id))]);
		} catch (e) {
			r === this.version && this.status(this.failure(e), !0);
		} finally {
			n.loading = !1, r === this.version && this.renderThread(e);
		}
	}
};
// src/libs/photo-client.ts
customElements.get("roy-moments") || customElements.define("roy-moments", Zu), ei.configured && gu().then((e) => {
	Object.assign(window, {
		RoyPhotoClient: e,
		RoyPhotoWeathers: Tu,
		RoyRichComments: Lr,
		RoyPhotoAvatars: {
			create: Wu,
			load: (t) => Ku(e, t)
		}
	}), window.dispatchEvent(new Event("roy-photo-ready"));
});
