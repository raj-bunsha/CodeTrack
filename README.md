## [CodeTrack]
Virtual rating system for codeforces using codeforces API.
Gnome Extension that integrates well with your linux enviroment

## Features:
- Problems suggestion.
- Virtual rating for solving problem out-of-contest.
- Make rating graph like in Codeforces
- Challenge timewatch (similar to TLE bot gitgud).

## Built with:
- [Django framework](https://www.djangoproject.com/)
- [Codeforces API](https://codeforces.com/apiHelp)
- [Matplotlib](https://matplotlib.org/)

## Setup:
It is ideal to use virtualenv.

### 1. Fork and clone this project
```
$ git clone https://github.com/raj-bunsha/CodeTrack.git
```
### 2. Install dependencies
```
$ pip install -r requirements.txt
```
### 3. Migrate
```
$ python manage.py migrate
```
### 4. Fetch the problemset
Run the shell
```
$ python manage.py shell
```
Run the script
```
$ from base.util import fetch_problemset
$ fetch_problemset()
```
### 5. Install as Gnome Extension
```

```
