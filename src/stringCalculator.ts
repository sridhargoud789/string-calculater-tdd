export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const delimiterLine = numbers.split("\n")[0];
      delimiter = new RegExp(delimiterLine.substring(2));
      numbers = numbers.substring(delimiterLine.length + 1);
    }

    const numberArray = numbers.split(delimiter).map(Number);
    return numberArray.reduce((sum, number) => sum + number, 0);
  }
}
