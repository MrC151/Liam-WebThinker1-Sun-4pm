import requests

# Base URL of the JavaScript server
BASE_URL = 'http://localhost:8080/users'
NBLINE_URL = 'http://localhost:8080/users/NBLINE.Points'
TERMINAL_URL = 'http://localhost:8080/users/Terminal.Points'


def get_users():
    response = requests.get(BASE_URL)
    if response.status_code == 200:
        users = response.json()
        print("Users:", users)
    else:
        print("Failed to retrieve users:", response.status_code)

def create_user(name, age):
    user_data = input("Please create your user.")
    response = requests.post(BASE_URL, json=user_data)
    if response.status_code == 201:
        print("User created:", response.json())
    else:
        print("Failed to create user:", response.status_code)

def get_user(user_id):
    response = requests.get(f"{BASE_URL}/{user_id}")
    if response.status_code == 200:
        user = response.json()
        print(f"User {user_id}:", user)
    else:
        print(f"User {user_id} not found:", response.status_code)
def get_NBLINE_points():
    response = requests.get(NBLINE_URL)
    if response.status_code == 200:
        print("Response from server:", response.text)
    else:
        print("Failed to retrieve data:", response.status_code)
def get_Terminal_points():
    response = requests.get(TERMINAL_URL)
    if response.status_code == 200:
        print("Response from server:", response.text)
    else:
        print("Failed to retrieve data:", response.status_code)
Terminal_Points = str(get_Terminal_points())
print("Current points:" + " " + Terminal_Points)
update_points = input("Would you like to add your points? Y/N ")
if update_points == "Y":
    get_NBLINE_points()
else:
    print("Points not updated.")

data = {
    'value': 10
}
