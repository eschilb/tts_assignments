package smalltownxlibrary;

import java.util.ArrayList;

public class Library {
    // Add the missing implementation to this class
	private String address;
	private static String hours = "Libraries are open daily from 9am to 5pm.";
	ArrayList<Book> bookList;
	
	public Library(String address) {
		this.address = address;
		bookList = new ArrayList<Book>();
	}
	
	public static void printOpeningHours() {
		System.out.println(hours);
	}
	public void printAddress() {
		System.out.println(address);	
	}
	
	public void addBook(Book book) {
		bookList.add(book);
	}
	
	public void printAvailableBooks() {
		for (Book book : bookList) {
			if (!book.isBorrowed()) {
				System.out.println(book.getTitle());
			}
		}	
	}
	
	public void borrowBook(String bookTitle) {
		String title;
		
		for (Book book : bookList) {
			title = book.getTitle();
			
			if(title.equals(bookTitle)) {
				if (!(book.isBorrowed())) {
						book.borrowed();
						System.out.println("You have borrowed: " + book.getTitle());
						return;
				} else {
					System.out.println("Book is already checked out");
					return;
				}
			} 
				
			
		}	
		System.out.println("Book not found in this library");	
	}
	
	public void returnBook(String bookTitle) {
		String title;
		
		for(Book book : bookList) {
			title = book.getTitle();
			if (title.equals(bookTitle)) {
				if (book.isBorrowed()) {
					book.returned();
					System.out.println("You have returned " + book.getTitle());
				}
			}
		}
	}
	
	@Override
	public String toString() {
		return "Library [address=" + address + ", bookList=" + bookList + "]";
	}

	public static void main(String[] args) {
        // Create two libraries
        Library firstLibrary = new Library("10 Main St.");
        Library secondLibrary = new Library("228 Liberty St.");

        // Add four books to the first library
        firstLibrary.addBook(new Book("The Da Vinci Code"));
        firstLibrary.addBook(new Book("Le Petit Prince"));
        firstLibrary.addBook(new Book("A Tale of Two Cities"));
        firstLibrary.addBook(new Book("The Lord of the Rings"));

        // Print opening hours and the addresses
        System.out.println("Library hours:");
        printOpeningHours();
        System.out.println();

        System.out.println("Library addresses:");
        firstLibrary.printAddress();
        secondLibrary.printAddress();
        System.out.println();


        // Try to borrow The Lords of the Rings from both libraries
        System.out.println("Borrowing The Lord of the Rings:");
        firstLibrary.borrowBook("The Lord of the Rings");
        firstLibrary.borrowBook("The Lord of the Rings");
        secondLibrary.borrowBook("The Lord of the Rings");
        System.out.println();

        // Print the titles of all available books from both libraries
        System.out.println("Books available in the first library:");
        firstLibrary.printAvailableBooks();
        System.out.println();
        System.out.println("Books available in the second library:");
        secondLibrary.printAvailableBooks();
        System.out.println();

        // Return The Lords of the Rings to the first library
        System.out.println("Returning The Lord of the Rings:");
        firstLibrary.returnBook("The Lord of the Rings");
        System.out.println();

        // Print the titles of available from the first library
        System.out.println("Books available in the first library:");
        firstLibrary.printAvailableBooks();
    }

} 
