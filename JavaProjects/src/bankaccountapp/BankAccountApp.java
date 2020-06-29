package bankaccountapp;

import java.util.LinkedList;
import java.util.List;

public class BankAccountApp {

	public static void main(String[] args) {
		List<Account> accounts = new LinkedList<Account>();
		
		String file = "/Users/MacBook/Downloads/original.csv";

		//read a csv file then create new accounts based on that data
		List<String[]> newAccountHolders = utilities.CSV.read(file);
		for (String[] accountHolder : newAccountHolders) {
			String name = accountHolder[0];
			String SSN = accountHolder[1];
			String accountType = accountHolder[2];
			double initDeposit = Double.parseDouble(accountHolder[3]);
			//System.out.println(name + " " + SSN + " " + accountType + " $" + initDeposit);
			if (accountType.equals("Savings")) {
				accounts.add(new Savings(name, SSN, initDeposit));
			} else if (accountType.equals("Checking")) {
				accounts.add(new Checking(name, SSN, initDeposit));
			} else {
				System.out.println("Error reading account type");
			}

		}

		for (Account acc : accounts) {
			System.out.println("\n***********\n");
			acc.showInfo();
		}
	}

}
