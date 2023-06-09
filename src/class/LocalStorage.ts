export class LocalStorage {
	static get(cle: string): number {
		const valeur = localStorage.getItem(cle);
		return valeur ? JSON.parse(valeur) : 0;
	}

	static set(cle: string, valeur: number): void {
		localStorage.setItem(cle, JSON.stringify(valeur));
	}
}