# Conference Scheduler

Small AngularJS schedule app using Firebase as the back end.

## Requirements

* Your favourite web server software (apache, nginx, etc.)
* Ansible (if installing using `ansible-playbook`)
* Ubuntu 14.04 with root key based auth (wider support coming soon)

## Installation

*Assumes you are installing the files in `/var/www/html`*

### Using Ansible

```
git clone https://github.com/null/ConferenceScheduler.git
cd ConferenceScheduler
ansible-playbook deploy.yml
```

### Kicking it old school

```
git clone https://github.com/nullfu/ConferenceScheduler.git
cp -r ConferenceScheduler/files/* /var/www/html/
```

## License

See LICENSE
