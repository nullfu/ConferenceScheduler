// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
  
  // connect to firebase 
  var ref = new Firebase("https://bsides2016-sched.firebaseio.com/tracks");  
  var fb = $firebase(ref);

  // sync as object 
  var syncObject = fb.$asObject();

  // three way data binding
  syncObject.$bindTo($scope, 'tracks');

  // function to set the default data
  $scope.reset = function() {    

    fb.$set({
      lock: {
          locked: true
      },
      t0845: {
        slots: {
          track0: {
            time: '0845',
            static_entry: true
          },
          track1: {
            speaker: 'Bsides MCR Crew',
            description: 'Welcome and opening',
            booked: false,
            static_entry: true
          },
          track2: {
            speaker: 'Bsides MCR Crew',
            description: 'Welcome and opening',
            booked: false,
            static_entry: true
          },
          track3: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
          track4: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
        }
      },
      t0900: {
        slots: {
          track0: {
            time: '0900',
            static_entry: true
          },
          track1: {
            speaker: 'Gavin Millard',
            description: 'Breaking out of the infosec echo chamber',
            booked: true
          },
          track2: {
            speaker: 'Dominic Chell & Matt Hickey',
            description: 'Breaking and Entering: Hacking Consumer Security Systems ',
            booked: true
          },
          track3: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
          track4: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
        }
      },
      t1000: {
        slots: {
          track0: {
            time: '1000',
            static_entry: true
          },
          track1: {
            speaker: 'Ben Turner',
            description: '21st Century War Stories!',
            booked: true
          },
          track2: {
            speaker: 'Steve Lord',
            description: 'Building your own hardware for hardware hacking ',
            booked: true
          },
          track3: {
            speaker: 'Jane Frankland',
            description: 'Gender diversity in cyber security: What works?',
            booked: true
          },
          track4: {
            speaker: 'Henri Watson',
            description: 'What\'s in your pocket?',
            booked: true
          },
        }
      },
      t1100: {
        slots: {
          track0: {
            time: '1100',
            static_entry: true
          },
          track1: {
            speaker: 'N/A',
            description: 'Break',
            booked: false,
            static_entry: true
          },
          track2: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
          track3: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
          track4: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
        }
      },
      t1130: {
        slots: {
          track0: {
            time: '1130',
            static_entry: true
          },
          track1: {
            speaker: 'Jerome Smith',
            description: 'From CSV to CMD to qwerty ',
            booked: true
          },
          track2: {
            speaker: 'Dr  Grigorios Fragkos',
            description: 'Accessing the personal details of InfoSec professionals & Responsible Disclosure process ',
            booked: true
          },
          track3: {
            speaker: 'James McKinlay',
            description: 'What can information security learn from DevOps ',
            booked: true
          },
          track4: {
            speaker: 'Ian Trump',
            description: 'Basic Malware Analysis - dispelling Malware FUD',
            booked: true
          },
        }
      },
      t1230: {
        slots: {
          track0: {
            time: '1230',
            static_entry: true
          },
          track1: {
            description: 'Lunch',
            booked: false,
            static_entry: true
          },
          track2: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
          track3: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
          track4: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
        }
      },
      t1330: {
        slots: {
          track0: {
            time: '1330',
            static_entry: true
          },
          track1: {
            speaker: 'James Kettle',
            description: 'Hunting Asyncronouse Vulnerabilities ',
            booked: true
          },
          track2: {
            speaker: 'Gregory Fudge',
            description: 'Hookinh the Linux Kernel without getting caught ',
            booked: true
          },
          track3: {
            speaker: 'Elliot Ward',
            description: 'Exploring & Exploiting video game security ',
            booked: true
          },
          track4: {
            speaker: 'Ignat Korchagin',
            description: 'Enforcing Web security and privacy with zero-knowledge protocols ',
            booked: true
          },
        }
      },
      t1430: {
        slots: {
          track0: {
            time: '1430',
            static_entry: true
          },
          track1: {
            speaker: 'Andy Davis',
            description: 'Vehicle cyber security and innovative assessment techniques ',
            booked: true
          },
          track2: {
            speaker: 'Matthew Di Ferrante',
            description: 'Exploiting P2P protocols for fun and profit!',
            booked: true
          },
          track3: {
            speaker: 'Andrew Pannell',
            description: '50 Million downloads and all I got was malware ',
            booked: true,
            time2: '1500',
            speaker2: 'Oxana Sereda',
            description2: '12 Steps to an affordable effective forensics lab',
            booked2: true
          },
          track4: {
            speaker: 'Michael Jack',
            description: 'Ensuring Password Cracking Ain\'t Easy REDUX',
            booked: true
          },
        }
      },
      t1530: {
        slots: {
          track0: {
            time: '1530',
            static_entry: true
          },
          track1: {
            description: 'Break',
            booked: false,
            static_entry: true
          },
          track2: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
          track3: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
          track4: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
        }
      },
      t1545: {
        slots: {
          track0: {
            time: '1545',
            static_entry: true
          },
          track1: {
            speaker: 'Ken Munro',
            description: 'Hacking the Mitsubishi Outlander  A lession in automotive IoT security ',
            booked: true
          },
          track2: {
            speaker: 'Sam Thomas',
            description: 'Object Oriented Exploitation - new techniques in Windows mitigation bypass.',
            booked: true
          },
          track3: {
            speaker: 'Soroush Dalili',
            description: 'Flash it baby ',
            booked: true
          },
          track4: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
        }
      },
      t1645: {
        slots: {
          track0: {
            time: '1645',
            static_entry: true
          },
          track1: {
            speaker: 'Richard Crowther',
            description: 'Designing systems to be hard to attack ',
            booked: true
          },
          track2: {
            speaker: 'Scott Helme',
            description: 'CSP SRI STS PKP ETC OMG WTF BBQ ',
            booked: true
          },
          track3: {
            speaker: 'Dr Daniel Dresner',
            description: 'Three laws of cyber, Thou shalt no pass!',
            booked: true
          },
          track4: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
        }
      },
      t1745: {
        slots: {
          track0: {
            time: '1745',
            static_entry: true
          },
          track1: {
            speaker: 'Bsides MCR Crew',
            description: 'Closing',
            booked: false,
            static_entry: true
          },
          track2: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
          track3: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
          track4: {
            speaker: '',
            description: '',
            booked: false,
            static_entry: true
          },
        }
      },
    });

  };
});

