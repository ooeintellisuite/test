# Naming Standards Documentation

## Table of Contents
- [General Principles](#general-principles)
- [Python Projects](#python-projects)
- [Node.js Projects](#nodejs-projects)
- [.NET Projects](#net-projects)
- [Database Naming](#database-naming)
- [API Naming](#api-naming)

## General Principles

### Universal Guidelines
- **Be descriptive and clear**: Names should clearly indicate purpose and functionality
- **Avoid abbreviations**: Use full words unless the abbreviation is widely understood
- **Be consistent**: Apply the same naming patterns throughout the project
- **Avoid reserved words**: Don't use language keywords or built-in function names
- **Use English**: All names should be in English for international collaboration

### Character Guidelines
- Avoid special characters except where required by convention
- No spaces in identifiers (use separators like underscore or camelCase)
- Avoid numbers at the beginning of identifiers
- Keep names reasonably short while maintaining clarity

---

## Python Projects

### Files and Directories
```
# Good
user_service.py
database_models.py
api_endpoints.py
tests/
utils/
config/

# Bad
UserService.py
databaseModels.py
api-endpoints.py
Tests/
```

### Variables and Functions
```python
# Variables - snake_case
user_name = "john_doe"
total_count = 42
is_active = True
database_connection = get_connection()

# Functions - snake_case
def get_user_data():
    pass

def calculate_total_price():
    pass

def is_user_authenticated():
    pass
```

### Classes
```python
# Classes - PascalCase
class UserService:
    pass

class DatabaseConnection:
    pass

class PaymentProcessor:
    pass
```

### Constants
```python
# Constants - UPPER_SNAKE_CASE
MAX_RETRY_COUNT = 3
DEFAULT_TIMEOUT = 30
API_BASE_URL = "https://api.example.com"
```

### Modules and Packages
```python
# Package structure
my_project/
├── __init__.py
├── user_management/
│   ├── __init__.py
│   ├── models.py
│   └── services.py
├── data_processing/
│   ├── __init__.py
│   └── validators.py
└── tests/
    └── test_user_management.py
```

---

## Node.js Projects

### Files and Directories
```
# Good
userService.js
databaseModels.js
apiEndpoints.js
tests/
utils/
config/

# Bad
UserService.js
database_models.js
api-endpoints.js
Tests/
```

### Variables and Functions
```javascript
// Variables - camelCase
const userName = "john_doe";
const totalCount = 42;
const isActive = true;
const databaseConnection = getConnection();

// Functions - camelCase
function getUserData() {
    // implementation
}

const calculateTotalPrice = () => {
    // implementation
};

async function isUserAuthenticated() {
    // implementation
}
```

### Classes
```javascript
// Classes - PascalCase
class UserService {
    constructor() {
        // implementation
    }
}

class DatabaseConnection {
    // implementation
}

class PaymentProcessor {
    // implementation
}
```

### Constants
```javascript
// Constants - UPPER_SNAKE_CASE
const MAX_RETRY_COUNT = 3;
const DEFAULT_TIMEOUT = 30;
const API_BASE_URL = "https://api.example.com";
```

### Object Properties
```javascript
// Object properties - camelCase
const userConfig = {
    maxRetries: 3,
    timeoutDuration: 5000,
    enableLogging: true,
    apiEndpoints: {
        users: "/api/users",
        payments: "/api/payments"
    }
};
```

### NPM Package Structure
```
my-node-project/
├── package.json
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── services/
│   │   └── userService.js
│   ├── models/
│   │   └── userModel.js
│   └── utils/
│       └── helpers.js
├── tests/
│   └── userService.test.js
└── config/
    └── database.js
```

---

## .NET Projects

### Files and Projects
```
# Good
UserService.cs
DatabaseModels.cs
ApiEndpoints.cs
MyProject.Services/
MyProject.Models/
MyProject.Tests/

# Bad
userService.cs
database_models.cs
api-endpoints.cs
my-project-services/
```

### Variables and Fields
```csharp
// Local variables - camelCase
string userName = "john_doe";
int totalCount = 42;
bool isActive = true;

// Private fields - camelCase with underscore prefix
private string _connectionString;
private int _maxRetryCount;
private bool _isInitialized;

// Public properties - PascalCase
public string UserName { get; set; }
public int TotalCount { get; set; }
public bool IsActive { get; set; }
```

### Methods
```csharp
// Methods - PascalCase
public void GetUserData()
{
    // implementation
}

public async Task<decimal> CalculateTotalPriceAsync()
{
    // implementation
}

public bool IsUserAuthenticated()
{
    // implementation
}
```

### Classes and Interfaces
```csharp
// Classes - PascalCase
public class UserService
{
    // implementation
}

public class DatabaseConnection
{
    // implementation
}

// Interfaces - PascalCase with 'I' prefix
public interface IUserService
{
    // interface definition
}

public interface IPaymentProcessor
{
    // interface definition
}
```

### Constants and Enums
```csharp
// Constants - PascalCase
public const int MaxRetryCount = 3;
public const string DefaultConnectionString = "server=localhost;";

// Enums - PascalCase
public enum UserStatus
{
    Active,
    Inactive,
    Suspended,
    Pending
}
```

### Namespaces
```csharp
// Namespaces - PascalCase with dots
namespace MyCompany.MyProject.Services
{
    // implementation
}

namespace MyCompany.MyProject.Models.Users
{
    // implementation
}
```

### Project Structure
```
MyProject/
├── MyProject.sln
├── src/
│   ├── MyProject.Api/
│   │   ├── Controllers/
│   │   │   └── UserController.cs
│   │   └── Program.cs
│   ├── MyProject.Services/
│   │   └── UserService.cs
│   ├── MyProject.Models/
│   │   └── UserModel.cs
│   └── MyProject.Data/
│       └── DatabaseContext.cs
└── tests/
    └── MyProject.Tests/
        └── UserServiceTests.cs
```

---

## Database Naming

### General Database Conventions
```sql
-- Tables - PascalCase or snake_case (be consistent)
Users
UserProfiles
OrderItems

-- or

users
user_profiles
order_items

-- Columns - PascalCase or snake_case
UserId, UserName, CreatedAt
-- or
user_id, user_name, created_at

-- Indexes
IX_Users_Email
IX_Users_CreatedAt
-- or
ix_users_email
ix_users_created_at
```

### Stored Procedures and Functions
```sql
-- Stored procedures - consistent with project style
GetUserById
UpdateUserProfile
DeleteInactiveUsers

-- or

get_user_by_id
update_user_profile
delete_inactive_users
```

---

## API Naming

### REST Endpoints
```
# Resource naming - plural nouns, kebab-case for compound words
GET /api/users
POST /api/users
GET /api/users/{id}
PUT /api/users/{id}
DELETE /api/users/{id}

# Nested resources
GET /api/users/{id}/orders
POST /api/users/{id}/orders
GET /api/users/{id}/orders/{orderId}

# Complex operations
POST /api/users/{id}/change-password
POST /api/orders/{id}/cancel
GET /api/reports/sales-summary
```

### Query Parameters
```
# Query parameters - camelCase or snake_case (be consistent)
GET /api/users?page=1&pageSize=10&sortBy=name
GET /api/orders?startDate=2023-01-01&endDate=2023-12-31

# or

GET /api/users?page=1&page_size=10&sort_by=name
GET /api/orders?start_date=2023-01-01&end_date=2023-12-31
```

### JSON Response Format
```json
{
  "data": {
    "userId": 123,
    "userName": "john_doe",
    "emailAddress": "john@example.com",
    "createdAt": "2023-01-01T00:00:00Z"
  },
  "meta": {
    "totalCount": 100,
    "currentPage": 1,
    "pageSize": 10
  }
}
```

---

## Best Practices Summary

### Do:
- Use consistent naming conventions throughout the project
- Choose clear, descriptive names that explain purpose
- Follow language-specific conventions
- Use version control friendly names (avoid spaces, special characters)
- Document any deviations from standards

### Don't:
- Mix naming conventions within the same project
- Use misleading names or abbreviations
- Use names that are too generic (e.g., `data`, `info`, `temp`)
- Ignore established team or company standards
- Use names that require frequent mental translation

### Code Review Checklist
- [ ] Names follow project conventions
- [ ] Names are descriptive and clear
- [ ] No abbreviations or unclear acronyms
- [ ] Consistent casing throughout
- [ ] Database names follow schema conventions
- [ ] API endpoints follow REST conventions