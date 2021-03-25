(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{839:function(e,t,a){"use strict";a.r(t);var c=a(1),s=Object(c.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"keepers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepers"}},[e._v("#")]),e._v(" Keepers")]),e._v(" "),a("p",[e._v("The bank module provides three different exported keeper interfaces which can be passed to other modules which need to read or update account balances. Modules should use the least-permissive interface which provides the functionality they require.")]),e._v(" "),a("p",[e._v("Note that you should always review the "),a("code",[e._v("bank")]),e._v(" module code to ensure that permissions are limited in the way that you expect.")]),e._v(" "),a("h2",{attrs:{id:"common-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-types"}},[e._v("#")]),e._v(" Common Types")]),e._v(" "),a("h3",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[e._v("#")]),e._v(" Input")]),e._v(" "),a("p",[e._v("An input of a multiparty transfer")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBJbnB1dCBzdHJ1Y3QgewogIEFkZHJlc3MgQWNjQWRkcmVzcwogIENvaW5zICAgQ29pbnMKfQo="}}),e._v(" "),a("h3",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" Output")]),e._v(" "),a("p",[e._v("An output of a multiparty transfer.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBPdXRwdXQgc3RydWN0IHsKICBBZGRyZXNzIEFjY0FkZHJlc3MKICBDb2lucyAgIENvaW5zCn0K"}}),e._v(" "),a("h2",{attrs:{id:"basekeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basekeeper"}},[e._v("#")]),e._v(" BaseKeeper")]),e._v(" "),a("p",[e._v("The base keeper provides full-permission access: the ability to arbitrary modify any account's balance and mint or burn coins.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCYXNlS2VlcGVyIGludGVyZmFjZSB7CiAgU2V0Q29pbnMoYWRkciBBY2NBZGRyZXNzLCBhbXQgQ29pbnMpCiAgU3VidHJhY3RDb2lucyhhZGRyIEFjY0FkZHJlc3MsIGFtdCBDb2lucykKICBBZGRDb2lucyhhZGRyIEFjY0FkZHJlc3MsIGFtdCBDb2lucykKICBJbnB1dE91dHB1dENvaW5zKGlucHV0cyBbXUlucHV0LCBvdXRwdXRzIFtdT3V0cHV0KQp9Cg=="}}),e._v(" "),a("p",[a("code",[e._v("setCoins")]),e._v(" fetches an account by address, sets the coins on the account, and saves the account.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c2V0Q29pbnMoYWRkciBBY2NBZGRyZXNzLCBhbXQgQ29pbnMpCiAgYWNjb3VudCA9IGFjY291bnRLZWVwZXIuZ2V0QWNjb3VudChhZGRyKQogIGlmIGFjY291bnQgPT0gbmlsCiAgICBmYWlsIHdpdGggJnF1b3Q7bm8gYWNjb3VudCBmb3VuZCZxdW90OwogIGFjY291bnQuQ29pbnMgPSBhbXQKICBhY2NvdW50S2VlcGVyLnNldEFjY291bnQoYWNjb3VudCkK"}}),e._v(" "),a("p",[a("code",[e._v("subtractCoins")]),e._v(" fetches the coins of an account, subtracts the provided amount, and saves the account. This decreases the total supply.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c3VidHJhY3RDb2lucyhhZGRyIEFjY0FkZHJlc3MsIGFtdCBDb2lucykKICBvbGRDb2lucyA9IGdldENvaW5zKGFkZHIpCiAgbmV3Q29pbnMgPSBvbGRDb2lucyAtIGFtdAogIGlmIG5ld0NvaW5zICZsdDsgMAogICAgZmFpbCB3aXRoICZxdW90O2Nhbm5vdCBlbmQgdXAgd2l0aCBuZWdhdGl2ZSBjb2lucyZxdW90OwogIHNldENvaW5zKGFkZHIsIG5ld0NvaW5zKQo="}}),e._v(" "),a("p",[a("code",[e._v("addCoins")]),e._v(" fetches the coins of an account, adds the provided amount, and saves the account. This increases the total supply.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"YWRkQ29pbnMoYWRkciBBY2NBZGRyZXNzLCBhbXQgQ29pbnMpCiAgb2xkQ29pbnMgPSBnZXRDb2lucyhhZGRyKQogIG5ld0NvaW5zID0gb2xkQ29pbnMgKyBhbXQKICBzZXRDb2lucyhhZGRyLCBuZXdDb2lucykK"}}),e._v(" "),a("p",[a("code",[e._v("inputOutputCoins")]),e._v(" transfers coins from any number of input accounts to any number of output accounts.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"aW5wdXRPdXRwdXRDb2lucyhpbnB1dHMgW11JbnB1dCwgb3V0cHV0cyBbXU91dHB1dCkKICBmb3IgaW5wdXQgaW4gaW5wdXRzCiAgICBzdWJ0cmFjdENvaW5zKGlucHV0LkFkZHJlc3MsIGlucHV0LkNvaW5zKQogIGZvciBvdXRwdXQgaW4gb3V0cHV0cwogICAgYWRkQ29pbnMob3V0cHV0LkFkZHJlc3MsIG91dHB1dC5Db2lucykK"}}),e._v(" "),a("h2",{attrs:{id:"sendkeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendkeeper"}},[e._v("#")]),e._v(" SendKeeper")]),e._v(" "),a("p",[e._v("The send keeper provides access to account balances and the ability to transfer coins between accounts, but not to alter the total supply (mint or burn coins).")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTZW5kS2VlcGVyIGludGVyZmFjZSB7CiAgU2VuZENvaW5zKGZyb20gQWNjQWRkcmVzcywgdG8gQWNjQWRkcmVzcywgYW10IENvaW5zKQp9Cg=="}}),e._v(" "),a("p",[a("code",[e._v("sendCoins")]),e._v(" transfers coins from one account to another.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c2VuZENvaW5zKGZyb20gQWNjQWRkcmVzcywgdG8gQWNjQWRkcmVzcywgYW10IENvaW5zKQogIHN1YnRyYWN0Q29pbnMoZnJvbSwgYW10KQogIGFkZENvaW5zKHRvLCBhbXQpCg=="}}),e._v(" "),a("h2",{attrs:{id:"viewkeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewkeeper"}},[e._v("#")]),e._v(" ViewKeeper")]),e._v(" "),a("p",[e._v("The view keeper provides read-only access to account balances but no balance alteration functionality. All balance lookups are "),a("code",[e._v("O(1)")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWaWV3S2VlcGVyIGludGVyZmFjZSB7CiAgR2V0Q29pbnMoYWRkciBBY2NBZGRyZXNzKSBDb2lucwogIEhhc0NvaW5zKGFkZHIgQWNjQWRkcmVzcywgYW10IENvaW5zKSBib29sCn0K"}}),e._v(" "),a("p",[a("code",[e._v("getCoins")]),e._v(" returns the coins associated with an account.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2V0Q29pbnMoYWRkciBBY2NBZGRyZXNzKQogIGFjY291bnQgPSBhY2NvdW50S2VlcGVyLmdldEFjY291bnQoYWRkcikKICBpZiBhY2NvdW50ID09IG5pbAogICAgcmV0dXJuIENvaW5ze30KICByZXR1cm4gYWNjb3VudC5Db2lucwo="}}),e._v(" "),a("p",[a("code",[e._v("hasCoins")]),e._v(" returns whether or not an account has at least the provided amount of coins.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"aGFzQ29pbnMoYWRkciBBY2NBZGRyZXNzLCBhbXQgQ29pbnMpCiAgYWNjb3VudCA9IGFjY291bnRLZWVwZXIuZ2V0QWNjb3VudChhZGRyKQogIGNvaW5zID0gZ2V0Q29pbnMoYWRkcikKICByZXR1cm4gY29pbnMgJmd0Oz0gYW10IAo="}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);