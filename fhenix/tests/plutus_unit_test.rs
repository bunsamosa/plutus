#[cfg(test)]
mod tests {
    use super::*; // Imports your contract logic

    #[test]
    fn test_view_bank_balance() {
        let mut contract = FinancialManager::new();

        let mock_data = FinancialData {
            credit_history: vec![],
            bank_balance: 10000,
        };

        contract.user_data = Private::new(mock_data);
        let balance = contract.view_bank_balance().unwrap();

        assert_eq!(balance, "Current Bank Balance: 10000");
    }

    #[test]
    fn test_transaction_summary() {
        let mut contract = FinancialManager::new();

        let transactions = vec![
            Transaction { amount: 500, date: 1633024000, description: "Coffee".to_string() },
            Transaction { amount: 1000, date: 1633110400, description: "Groceries".to_string() }
        ];

        contract.user_data = Private::new(FinancialData {
            credit_history: transactions.clone(),
            bank_balance: 5000,
        });

        let summary = contract.view_transaction_summary().unwrap();
        let expected_summary = format!(
            "Date: {}, Amount: 500, Description: Coffee\nDate: {}, Amount: 1000, Description: Groceries",
            transactions[0].date, transactions[1].date
        );

        assert_eq!(summary, expected_summary);
    }

    #[test]
    fn test_loan_request() {
        let mut contract = FinancialManager::new();

        let result = contract.request_loan(2000, 0.05, 30).unwrap();
        assert_eq!(result, "Loan requested successfully!");

        let loan_status = contract.view_loan_status().unwrap();
        assert!(loan_status.contains("Loan Amount: 2000"));
    }
}
