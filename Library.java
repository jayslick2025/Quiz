import java.util.Scanner;

public class Library {
  public static void main(String[] args) {
    String[] titles = {"Madness Of Didi", "There was a country", "Things fall apart", "The eagle has landed", "Murder in west wing"};
    String[] status = {"Available", "Available", "Available", "Available", "Available"};
    Scanner scanner = new Scanner(System.in);

    while (true) {
      System.out.println("\nLibrary Book Tracker");
      System.out.println("1. View all books");
      System.out.println("2. Borrow a book");
      System.out.println("3. Return a book");
      System.out.println("4. Exit");
      System.out.print("Enter your choice: ");
      int choice = scanner.nextInt();

      if (choice == 1) {
        System.out.println("\nAvailable Books:");
        for (int i = 0; i < titles.length; i++) {
          System.out.println((i + 1) + ". " + titles[i] + " - " + status[i]);
        }
      } else if (choice == 2) {
        System.out.println("\nAvailable Books:");
        for (int i = 0; i < titles.length; i++) {
          System.out.println((i + 1) + ". " + titles[i] + " - " + status[i]);
        }
        System.out.print("\nEnter the book number to borrow: "); 
	int bookChoice = scanner.nextInt() - 1;
        if (status[bookChoice].equals("Available")) {
          status[bookChoice] = "Borrowed";
          System.out.println("\n'" + titles[bookChoice] + "' has been     borrowed.");
        } else {
          System.out.println("\n'" + titles[bookChoice] + "' is currently not available.");
        }
      } else if (choice == 3) {
        System.out.println("\nAvailable Books:");
        for (int i = 0; i < titles.length; i++) {
          System.out.println((i + 1) + ". " + titles[i] + " - " + status[i]);
 }
        System.out.print("\nEnter the book number to return: ");
        int bookChoice = scanner.nextInt() - 1;
        if (status[bookChoice].equals("Borrowed")) {
          status[bookChoice] = "Available";
          System.out.println("\n'" + titles[bookChoice] + "' has been returned.");
        } else {
          System.out.println("\n'" + titles[bookChoice] + "' is already available.");
        }
      } else if (choice == 4) {
        System.out.println("\nExiting the program. Goodbye!");
        break;
      } else {
        System.out.println("\nInvalid choice. Please try again."); 

        }
    }
  }
}
        




