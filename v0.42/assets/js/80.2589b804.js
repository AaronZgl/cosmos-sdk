(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{751:function(e,t,a){"use strict";a.r(t);var s=a(1),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-14-proportional-slashing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-14-proportional-slashing"}},[e._v("#")]),e._v(" ADR 14: Proportional Slashing")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2019-10-15: Initial draft")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("In Proof of Stake-based chains, centralization of consensus power amongst a small set of validators can cause harm to the network due to increased risk of censorship, liveness failure, fork attacks, etc.  However, while this centralization causes a negative externality to the network, it is not directly felt by the delegators contributing towards delegating towards already large validators.  We would like a way to pass on the negative externality cost of centralization onto those large validators and their delegators.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("h3",{attrs:{id:"design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),a("p",[e._v("To solve this problem, we will implement a procedure called Proportional Slashing.  The desire is that the larger a validator is, the more they should be slashed.  The first naive attempt is to make a validator's slash percent proportional to their share of consensus voting power.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c2xhc2hfYW1vdW50ID0gayAqIHBvd2VyIC8vIHBvd2VyIGlzIHRoZSBmYXVsdGluZyB2YWxpZGF0b3IncyB2b3RpbmcgcG93ZXIgYW5kIGsgaXMgc29tZSBvbi1jaGFpbiBjb25zdGFudAo="}}),e._v(" "),a("p",[e._v("However, this will incentivize validators with large amounts of stake to split up their voting power amongst accounts, so that if they fault, they all get slashed at a lower percent.  The solution to this is to take into account not just a validator's own voting percentage, but also the voting percentage of all the other validators who get slashed in a specified time frame.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c2xhc2hfYW1vdW50ID0gayAqIChwb3dlcl8xICsgcG93ZXJfMiArIC4uLiArIHBvd2VyX24pIC8vIHdoZXJlIHBvd2VyX2kgaXMgdGhlIHZvdGluZyBwb3dlciBvZiB0aGUgaXRoIHZhbGlkYXRvciBmYXVsdGluZyBpbiB0aGUgc3BlY2lmaWVkIHRpbWUgZnJhbWUgYW5kIGsgaXMgc29tZSBvbi1jaGFpbiBjb25zdGFudAo="}}),e._v(" "),a("p",[e._v("Now, if someone splits a validator of 10% into two validators of 5% each which both fault, then they both fault in the same time frame, they both will still get slashed at the sum 10% amount.")]),e._v(" "),a("p",[e._v("However, an operator might still choose to split up their stake across multiple accounts with hopes that if any of them fault independently, they will not get slashed at the full amount.  In the case that the validators do fault together, they will get slashed the same amount as if they were one entity.  There is no con to splitting up.  However, if operators are going to split up their stake without actually decorrelating their setups, this also causes a negative externality to the network as it fills up validator slots that could have gone to others or increases the commit size.  In order to disincentivize this, we want it to be the case such that splitting up a validator into multiple validators and they fault together is punished more heavily that keeping it as a single validator that faults.")]),e._v(" "),a("p",[e._v("We can achieve this by not only taking into account the sum of the percentages of the validators that faulted, but also the "),a("em",[e._v("number")]),e._v(" of validators that faulted in the window.  One general form for an equation that fits this desired property looks like this:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c2xhc2hfYW1vdW50ID0gayAqICgocG93ZXJfMSleKDEvcikgKyAocG93ZXJfMileKDEvcikgKyAuLi4gKyAocG93ZXJfbileKDEvcikpXnIgLy8gd2hlcmUgayBhbmQgciBhcmUgYm90aCBvbi1jaGFpbiBjb25zdGFudHMK"}}),e._v(" "),a("p",[e._v("So now, for example, assuming k=1 and r=2, if one validator of 10% faults, it gets a 10% slash, while if two validators of 5% each fault together, they both get a 20% slash ((sqrt(0.05)+sqrt(0.05))^2).")]),e._v(" "),a("h4",{attrs:{id:"correlation-across-non-sybil-validators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#correlation-across-non-sybil-validators"}},[e._v("#")]),e._v(" Correlation across non-sybil validators")]),e._v(" "),a("p",[e._v("One will note, that this model doesn't differentiate between multiple validators run by the same operators vs validators run by different operators.  This can be seen as an additional benefit in fact.  It incentivizes validators to differentiate their setups from other validators, to avoid having correlated faults with them or else they risk a higher slash.  So for example, operators should avoid using the same popular cloud hosting platforms or using the same Staking as a Service providers.  This will lead to a more resilient and decentralized network.")]),e._v(" "),a("h4",{attrs:{id:"parameterization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameterization"}},[e._v("#")]),e._v(" Parameterization")]),e._v(" "),a("p",[e._v("The value of k and r can be different for different types of slashable faults.  For example, we may want to punish liveness faults 10% as severely as double signs.")]),e._v(" "),a("p",[e._v("There can also be minimum and maximums put in place in order to bound the size of the slash percent.")]),e._v(" "),a("h4",{attrs:{id:"griefing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#griefing"}},[e._v("#")]),e._v(" Griefing")]),e._v(" "),a("p",[e._v("Griefing, the act of intentionally being slashed to make another's slash worse, could be a concern here.  However, using the protocol described here, the attacker could not substantially grief without getting slashed a substantial amount themselves.  The larger the validator is, the more heavily it can impact the slash, it needs to be non-trivial to have a significant impact on the slash percent.  Furthermore, the larger the grief, the griefer loses quadratically more.")]),e._v(" "),a("p",[e._v("It may also be possible to, rather than the k and r factors being constants, perhaps using an inverse gini coefficient may mitigate some griefing attacks, but this an area for future research.")]),e._v(" "),a("h3",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v('In the slashing module, we will add two queues that will track all of the recent slash events.  For double sign faults, we will define "recent slashes" as ones that have occured within the last '),a("code",[e._v("unbonding period")]),e._v('.  For liveness faults, we will define "recent slashes" as ones that have occured withing the last '),a("code",[e._v("jail period")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dHlwZSBTbGFzaEV2ZW50IHN0cnVjdCB7CiAgICBBZGRyZXNzICAgICAgICAgICAgICAgICAgICAgc2RrLlZhbEFkZHJlc3MKICAgIFNxcnRWYWxpZGF0b3JWb3RpbmdQZXJjZW50ICBzZGsuRGVjCiAgICBTbGFzaGVkU29GYXIgICAgICAgICAgICAgICAgc2RrLkRlYwp9Cg=="}}),e._v(" "),a("p",[e._v('These slash events will be pruned from the queue once they are older than their respective "recent slash period".')]),e._v(" "),a("p",[e._v("Whenever a new slash occurs, a "),a("code",[e._v("SlashEvent")]),e._v(" struct is created with the faulting validator's voting percent and a "),a("code",[e._v("SlashedSoFar")]),e._v(" of 0.  Because recent slash events are pruned before the unbonding period and unjail period expires, it should not be possible for the same validator to have multiple SlashEvents in the same Queue at the same time.")]),e._v(" "),a("p",[e._v("We then will iterate over all the SlashEvents in the queue, adding their "),a("code",[e._v("SqrtValidatorVotingPercent")]),e._v(' and squaring the result to calculate the new percent to slash all the validators in the queue at, using the "Square of Sum of Roots" formula introduced above.')]),e._v(" "),a("p",[e._v("Once we have the "),a("code",[e._v("NewSlashPercent")]),e._v(", we then iterate over all the "),a("code",[e._v("SlashEvent")]),e._v("s in the queue once again, and if "),a("code",[e._v("NewSlashPercent > SlashedSoFar")]),e._v(" for that SlashEvent, we call the "),a("code",[e._v("staking.Slash(slashEvent.Address, slashEvent.Power, Math.Min(Math.Max(minSlashPercent, NewSlashPercent - SlashedSoFar), maxSlashPercent)")]),e._v(" (we pass in the power of the validator before any slashes occured, so that we slash the right amount of tokens).  We then set "),a("code",[e._v("SlashEvent.SlashedSoFar")]),e._v(" amount to "),a("code",[e._v("NewSlashPercent")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Proposed")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Increases decentralization by disincentivizing delegating to large validators")]),e._v(" "),a("li",[e._v("Incentivizes Decorrelation of Validators")]),e._v(" "),a("li",[e._v("More severely punishes attacks than accidental faults")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("May require computationally expensive root function in state machine")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);