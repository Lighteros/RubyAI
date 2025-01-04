const _0x4b75f5 = _0x5d37;
(function (_0x50394f, _0x79f6ab) {
  const _0x10ad99 = _0x5d37,
    _0x142ce6 = _0x50394f();
  while (!![]) {
    try {
      const _0x574c4f =
        parseInt(_0x10ad99(0x109)) / 0x1 +
        (parseInt(_0x10ad99(0x132)) / 0x2) *
          (-parseInt(_0x10ad99(0x101)) / 0x3) +
        (parseInt(_0x10ad99(0x115)) / 0x4) *
          (-parseInt(_0x10ad99(0x122)) / 0x5) +
        parseInt(_0x10ad99(0x129)) / 0x6 +
        (-parseInt(_0x10ad99(0x111)) / 0x7) *
          (-parseInt(_0x10ad99(0x154)) / 0x8) +
        (-parseInt(_0x10ad99(0x133)) / 0x9) *
          (parseInt(_0x10ad99(0xfe)) / 0xa) +
        (-parseInt(_0x10ad99(0x119)) / 0xb) *
          (-parseInt(_0x10ad99(0x142)) / 0xc);
      if (_0x574c4f === _0x79f6ab) break;
      else _0x142ce6["push"](_0x142ce6["shift"]());
    } catch (_0x12adda) {
      _0x142ce6["push"](_0x142ce6["shift"]());
    }
  }
})(_0x53ef, 0x43a31);
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
  WagmiCore,
  WagmiCoreChains,
  WagmiCoreConnectors,
} from "https://unpkg.com/@web3modal/ethereum@2.6.2";
import { Web3Modal } from "https://unpkg.com/@web3modal/html@2.6.2";
const {
    configureChains,
    createConfig,
    getAccount,
    fetchToken,
    fetchBalance,
    connect,
    disconnect,
    switchNetwork,
    getNetwork,
  } = WagmiCore,
  { mainnet, bsc, goerli } = WagmiCoreChains,
  { CoinbaseWalletConnector, MetaMaskConnector, WalletConnectConnector } =
    WagmiCoreConnectors,
  chains = [mainnet, bsc],
  projectId = _0x4b75f5(0x120),
  { publicClient } = configureChains(chains, [
    w3mProvider({ projectId: projectId }),
  ]),
  wagmiConfig = createConfig({
    autoConnect: !![],
    connectors: w3mConnectors({
      chains: chains,
      version: 0x1,
      projectId: projectId,
    }),
    publicClient: publicClient,
  }),
  ethereumClient = new EthereumClient(wagmiConfig, chains);
export const web3modal = new Web3Modal(
  { projectId: projectId },
  ethereumClient
);
const unsubscribe = web3modal["subscribeModal"]((_0x2cf301) => {
  getAcc();
});
var adressPlace = document[_0x4b75f5(0x136)]("wl3-adress")[0x0],
  tokenPlace = document[_0x4b75f5(0x136)](_0x4b75f5(0x123))[0x0],
  modelAccept = ![],
  walletConnectBtns = document["getElementsByClassName"](_0x4b75f5(0x14c)),
  chainSelectBtns = document["getElementsByClassName"](_0x4b75f5(0x104));
function _0x5d37(_0x154e93, _0x455fe4) {
  const _0x53ef7b = _0x53ef();
  return (
    (_0x5d37 = function (_0x5d37fc, _0xd45a9d) {
      _0x5d37fc = _0x5d37fc - 0xfe;
      let _0x1a24bb = _0x53ef7b[_0x5d37fc];
      return _0x1a24bb;
    }),
    _0x5d37(_0x154e93, _0x455fe4)
  );
}
function changeAllTokens(_0x2ad298) {
  const _0x330025 = _0x4b75f5;
  tokenPlace[_0x330025(0x14b)] =
    _0x330025(0x105) + Number(_0x2ad298)[_0x330025(0x151)]("en");
  var _0x2223b5 = document[_0x330025(0x136)]("token-hold-info");
  for (let _0x36fada of _0x2223b5) {
    let _0x5291cd = document["getElementsByClassName"](_0x330025(0x149))[0x0],
      _0x381203 = document[_0x330025(0x136)](_0x330025(0x143))[0x0],
      _0x41441c = document["getElementsByClassName"]("model__hold-attemp")[0x0],
      _0xd9a526 = _0x36fada[_0x330025(0x136)]("token-hold-info__wallet")[0x0],
      _0x5f07d3 = _0x36fada["getElementsByClassName"](_0x330025(0x125))[0x0],
      _0x5eef28 = _0x36fada["getElementsByClassName"](_0x330025(0x12f))[0x0],
      _0x54817e = Math["round"](
        _0x2ad298 /
          (_0x5f07d3["attributes"][_0x330025(0x13c)][_0x330025(0x107)] / 0x64)
      ),
      _0x28815c = _0x36fada["getElementsByClassName"](
        "token-hold-info__ok"
      )[0x0],
      _0xf6bd31 = _0x36fada[_0x330025(0x136)](_0x330025(0x152))[0x0];
    (_0xd9a526[_0x330025(0x14b)] =
      Number(_0x2ad298)["toLocaleString"]("en") + _0x330025(0x110)),
      Number(_0x5f07d3[_0x330025(0x140)][_0x330025(0x13c)][_0x330025(0x107)]) <=
      _0x2ad298
        ? ((_0x28815c[_0x330025(0x155)][_0x330025(0x13d)] = _0x330025(0x113)),
          (_0xf6bd31[_0x330025(0x155)]["display"] = _0x330025(0x144)),
          typeof _0x5291cd !== _0x330025(0x12e) &&
            (_0x5291cd["classList"][_0x330025(0xff)](_0x330025(0x128)),
            (_0x381203[_0x330025(0x156)] = ![]),
            (_0x41441c["style"][_0x330025(0x13d)] = _0x330025(0x144))))
        : ((_0xf6bd31[_0x330025(0x155)][_0x330025(0x13d)] = _0x330025(0x113)),
          (_0x28815c[_0x330025(0x155)]["display"] = "none"),
          typeof _0x5291cd !== _0x330025(0x12e) &&
            (_0x5291cd[_0x330025(0x100)][_0x330025(0x124)](_0x330025(0x128)),
            (_0x381203[_0x330025(0x156)] = !![]),
            (_0x41441c[_0x330025(0x155)]["display"] = _0x330025(0x139)))),
      Number(_0x5f07d3[_0x330025(0x140)][_0x330025(0x13c)][_0x330025(0x107)]) ==
      0x0
        ? (_0x5eef28[_0x330025(0x155)][_0x330025(0x14e)] = "100%")
        : (_0x5eef28["style"]["width"] = _0x54817e + "%");
  }
}
async function phantomConnect() {
  const _0x53a74d = _0x4b75f5;
  if (_0x53a74d(0x12a) in window) {
    const _0x511631 = window[_0x53a74d(0x12a)]?.["solana"];
    if (_0x511631?.[_0x53a74d(0x106)]) {
      _0x511631["on"](_0x53a74d(0x11f), () =>
        console[_0x53a74d(0x10e)](_0x53a74d(0x127))
      );
      const _0x3ba997 = await _0x511631[_0x53a74d(0x11f)]();
      return _0x3ba997["publicKey"][_0x53a74d(0x138)]();
    }
  } else return _0x53a74d(0x13e);
}
async function getToken(_0x3f67cc) {
  const _0x42267b = _0x4b75f5;
  let _0x52b13a = "";
  console[_0x42267b(0x10e)](_0x42267b(0x147) + localStorage[_0x42267b(0x135)]);
  if (localStorage[_0x42267b(0x135)] == _0x42267b(0x141)) {
    console["log"](_0x42267b(0x134));
    const _0x1bad52 = new solanaWeb3["Connection"](_0x42267b(0x131));
    let _0xf18f8 = new solanaWeb3["PublicKey"](_0x3f67cc);
    console["log"](_0xf18f8);
    const _0x3b9f57 = new solanaWeb3[_0x42267b(0x108)](_0x42267b(0x14a)),
      _0x10416f = await _0x1bad52[_0x42267b(0x114)](_0xf18f8, {
        mint: _0x3b9f57,
      });
    let _0x2e9a14 =
      _0x10416f[_0x42267b(0x107)][0x0]?.["account"][_0x42267b(0x11a)][
        _0x42267b(0x12c)
      ]["info"][_0x42267b(0x137)]["uiAmount"];
    _0x2e9a14 == undefined && (_0x2e9a14 = 0x0), (_0x52b13a = _0x2e9a14);
  } else {
    let _0x1a5111 = getNetwork();
    (_0x52b13a = await fetchBalance({
      address: _0x3f67cc,
      token: "0x1591E923e0836a3949b59637FBE8959F000894B9",
      chainId: _0x1a5111[_0x42267b(0x11c)]["id"],
    })),
      console[_0x42267b(0x10e)](
        "chain:\x20" +
          _0x1a5111[_0x42267b(0x11c)]["id"] +
          "\x20token:\x20" +
          _0x52b13a["formatted"]
      ),
      (_0x52b13a = _0x52b13a["formatted"][_0x42267b(0x10a)](".")[0x0]);
  }
  changeAllTokens(_0x52b13a);
}
async function getAcc(_0x59697c = ![]) {
  const _0x144675 = _0x4b75f5;
  console[_0x144675(0x10e)](localStorage["selectedChain"]);
  if (localStorage[_0x144675(0x135)] == _0x144675(0x141)) {
    let _0x5f1a19 = await phantomConnect();
    if (_0x5f1a19 == _0x144675(0x13e)) {
      _0x59697c == !![] && alert(_0x144675(0x130));
      return;
    }
    getToken(_0x5f1a19);
    for (let _0x34e65c of walletConnectBtns) {
      _0x34e65c[_0x144675(0x14b)] =
        _0x5f1a19["substring"](0x0, 0x6) +
        "..." +
        _0x5f1a19[_0x144675(0x14f)](-0x6);
    }
  } else {
    const _0x269ef2 = await getAccount();
    if (_0x269ef2[_0x144675(0x11e)] !== undefined) {
      (adressPlace[_0x144675(0x14b)] =
        _0x269ef2[_0x144675(0x11e)]["substring"](0x0, 0x6) +
        "..." +
        _0x269ef2[_0x144675(0x11e)][_0x144675(0x14f)](-0x6)),
        getToken(_0x269ef2[_0x144675(0x11e)]),
        document[_0x144675(0x136)](_0x144675(0x11d))[0x0]["classList"][
          _0x144675(0xff)
        ]("wallets--toggle");
      for (let _0x262744 of walletConnectBtns) {
        _0x262744[_0x144675(0x14b)] =
          _0x269ef2[_0x144675(0x11e)][_0x144675(0x126)](0x0, 0x6) +
          _0x144675(0x103) +
          _0x269ef2["address"][_0x144675(0x14f)](-0x6);
      }
    } else {
      (adressPlace[_0x144675(0x14b)] = ""), (tokenPlace[_0x144675(0x14b)] = "");
      for (let _0x2b9d20 of walletConnectBtns) {
        _0x2b9d20[_0x144675(0x14b)] = _0x144675(0x10f);
      }
    }
  }
}
$(".type-phantom")["on"](_0x4b75f5(0x13a), function () {
  const _0x16c512 = _0x4b75f5;
  (localStorage["selectedChain"] = "SOL"),
    getAcc(!![]),
    $(_0x16c512(0x13f))[_0x16c512(0x153)]();
}),
  $(_0x4b75f5(0x102))["on"]("click", function () {
    const _0x992650 = _0x4b75f5;
    (localStorage[_0x992650(0x135)] = _0x992650(0x116)),
      getAcc(),
      $(_0x992650(0x13f))[_0x992650(0x153)](),
      web3modal[_0x992650(0x146)]();
  });
for (let item of walletConnectBtns) {
  item[_0x4b75f5(0x11b)](_0x4b75f5(0x13a), () => {
    const _0x1905c8 = _0x4b75f5;
    $(_0x1905c8(0x13f))[_0x1905c8(0x121)]();
  });
}
for (let item of chainSelectBtns) {
  item[_0x4b75f5(0x11b)](_0x4b75f5(0x13a), () => {
    console["log"]("disc");
  });
}
getAcc();
function changeChain(_0x3fedc3) {
  const _0x3877b2 = _0x4b75f5;
  localStorage[_0x3877b2(0x135)] == undefined &&
    ((localStorage[_0x3877b2(0x135)] = _0x3877b2(0x141)),
    (_0x3fedc3 = _0x3877b2(0x141)));
  $(_0x3877b2(0x112))[_0x3877b2(0x10b)](_0x3877b2(0x150)),
    $(_0x3877b2(0x118) + _0x3fedc3 + "\x22]")[_0x3877b2(0x10d)](
      _0x3877b2(0x150)
    ),
    $(_0x3877b2(0x12d))[_0x3877b2(0x10b)](_0x3877b2(0x145));
  if (_0x3fedc3 == _0x3877b2(0x116))
    $("body")[_0x3877b2(0x10d)](_0x3877b2(0x117));
  else {
    if (_0x3fedc3 == "ETH") $("body")["addClass"](_0x3877b2(0x148));
    else
      _0x3fedc3 == _0x3877b2(0x141) && $("body")[_0x3877b2(0x10d)]("chain-sol");
  }
  (localStorage[_0x3877b2(0x135)] = _0x3fedc3),
    getAcc(),
    $(".tokenomics-graph\x20.aos-animate")[_0x3877b2(0x10b)]("aos-animate"),
    setTimeout(() => {
      const _0x1cccc7 = _0x3877b2;
      $(_0x1cccc7(0x14d))[_0x1cccc7(0x10d)](_0x1cccc7(0x10c));
    }, 0xc8);
}
function _0x53ef() {
  const _0x26140d = [
    "https://solana-mainnet.core.chainstack.com/c7b0cddeb822e7cd8359f384d11079b5",
    "10cYlrAt",
    "5463kQABVB",
    "gettokensolana",
    "selectedChain",
    "getElementsByClassName",
    "tokenAmount",
    "toString",
    "inline-block",
    "click",
    "attr",
    "data-hold",
    "display",
    "error",
    ".modal-wallets",
    "attributes",
    "SOL",
    "367368yrkJOa",
    "model__submit",
    "none",
    "chain-bsc\x20chain-eth\x20chain-sol",
    "openModal",
    "gettokenCHAIN\x20-\x20",
    "chain-eth",
    "ajax",
    "0x12fD924a812a0e61E2C14262bd26f4876177843E",
    "innerHTML",
    "wallet-connect",
    ".tokenomics-graph\x20[data-aos]",
    "width",
    "slice",
    "--active",
    "toLocaleString",
    "token-hold-info__bad",
    "fadeOut",
    "8bBHLZl",
    "style",
    "disabled",
    "530QpBABi",
    "remove",
    "classList",
    "121785ZBPbpX",
    ".type-walletconnect",
    "...",
    "theme-btn",
    "$RAI:\x20",
    "isPhantom",
    "value",
    "PublicKey",
    "215810zxrMJN",
    "split",
    "removeClass",
    "aos-animate",
    "addClass",
    "log",
    "Connect\x20wallet",
    "\x20<span\x20class=\x27mainColor\x27>$RAI</span>",
    "1079561MdmIbD",
    ".chain-select-btn__text",
    "inline",
    "getParsedTokenAccountsByOwner",
    "1966304OKuQMw",
    "BSC",
    "chain-bsc",
    ".chain-select-btn__text[data-chain=\x22",
    "110KrPkGK",
    "data",
    "addEventListener",
    "chain",
    "wallets",
    "address",
    "connect",
    "4ff737ac516181032708cffa85029902",
    "fadeIn",
    "5IEczIz",
    "wl3-token",
    "add",
    "token-hold-bar",
    "substring",
    "connected!",
    "send-false",
    "1965540yiMglC",
    "phantom",
    "data-chain",
    "parsed",
    "body",
    "undefined",
    "token-hold-bar__line",
    "Please\x20install\x20Phantom",
  ];
  _0x53ef = function () {
    return _0x26140d;
  };
  return _0x53ef();
}
changeChain(localStorage["selectedChain"]),
  $(_0x4b75f5(0x112))["on"](_0x4b75f5(0x13a), function () {
    const _0x1bd1cf = _0x4b75f5;
    changeChain($(this)[_0x1bd1cf(0x13b)](_0x1bd1cf(0x12b)));
  });
