# Flight-information-system-using-Neo4jGraph
The aim of this project is to provide information about flights and which flight can be most beneficial to travel rather than booking any of the flights to travel from source to destination.
The users can type their source and destination locations and based on that; it will show which flight booking route to be followed with closest route.

![image](https://github.com/sachinmoze/Flight-information-system-using-Neo4jGraph/assets/83491841/349a38c2-0dce-474e-b536-54e0cc62e616)


## How to Run the Project

Follow these steps to run the Flight Information System application:

1. Clone the repository to your local machine.
  ```bash
  git clone https://github.com/sachinmoze/Flight-information-system-using-Neo4jGraph.git
  ```

2. Install the required dependencies by running `pip install -r requirements` in the project directory.

  ```bash
  pip install -r requirements.txt
  ```

3. Set up the Neo4j database by following the instructions in the [database setup guide](docs/database-setup.md).

4. Configure app.py file with your database credentials.
  ```
  graph = Graph("bolt://localhost/7687", auth=("neo4j", "1234567890"))
  ```

5. Start the application by running.
  ```
  python app.py
  ```
6. Open your web browser and navigate to `http://localhost:5000` to access the application.

## Support

For any inquiries or support requests, please contact us at [sachinmoze@gmail.com](mailto:sachinmoze@gmail.com).

## License

This project is licensed under the [MIT License](LICENSE.md). See the [LICENSE.md](LICENSE.md) file for details.

## Version History

- **Version 1.0.0** (Release Date: 04/21/2024):
  - Initial release of the Flight Information System application.
  - Basic features include finding shortest flights between source and destination.
