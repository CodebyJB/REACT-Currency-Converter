# Currency Converter App

This project is a simple Currency Converter web application built using React. It allows users to input an amount in one currency and see the equivalent amount in another selected currency. The exchange rates are fetched from the [Frankfurter API](https://www.frankfurter.app/).

## Features

- Real-time currency conversion using the Frankfurter API.
- User-friendly interface with easy-to-use input and output fields.
- Automatic currency conversion on input changes.
- Select from a range of currencies to convert from and to.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- useState: A React hook for managing component state.
- useEffect: A React hook for handling side effects in functional components.
- Fetch API: Used to fetch exchange rate data from the Frankfurter API.
- Frankfurter API: An open-source currency exchange rate API.

## How to Use

1. Clone the project repository:

```bash
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your web browser and navigate to `http://localhost:3000` to access the Currency Converter application.

5. Select the currency you want to convert from in the first dropdown (default is EUR).

6. Enter the amount you want to convert in the input field.

7. Select the currency you want to convert to in the second dropdown (default is USD).

8. The equivalent amount in the selected currency will be displayed in the second input field.

## Notes

- The exchange rates are fetched from the Frankfurter API, which provides up-to-date and accurate data.
- The conversion is performed automatically whenever the input or output currency is changed.
- If an error occurs while fetching the exchange rate data, an error message will be logged to the console.

## Credits

- The exchange rate data is provided by the [Frankfurter API](https://www.frankfurter.app/).