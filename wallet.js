class Wallet{
	constructor(money){
		let _money = money;
		
		this.getWalletValue = () => _money;
		
		//sprawdzanie czy user ma odpowiednia ilosc srodkow
		this.checkCanPlay = (value) => {
			if(_money>=value) return true;
			return false;
		}
		
		//zmienia zawartosc portfela
		this.changeWallet = (value, type ="+") => {
			if(typeof value === "number" && !isNaN(value)){
				if(type === "+"){
					return _money += value;
				} else if(type === "-"){
					return _money-= value;
				} else{
					throw new Error("nieprawidłowy tryb działania");
				}
			} else {
				console.log(typeof value);
				throw new Error("nieprawidłowa liczba");
			}
		}
	}
}

//const wallet = new Wallet(200);