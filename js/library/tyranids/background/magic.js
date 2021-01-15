magic : {
	magicname : 'Hive Mind',
	spell : {
		'Smite' : {
			cast:'5',
			range:'',
			target:'',
			effect:'The closest enemy unit within 18\" of the psyker suffers D3 mortal wounds. If the result of the Psychic test was more than 10, the target suffers D6 mortal wounds instead.',
		},
		'Dominion' : {
			cast:'5',
			range:'36',
			target:'friendly <b>TYRANIDS</b> unit with Instinctive Behaviour',
			effect:'Until the end of your next Psychic phase, that unit ignores its Instinctive Behaviour ability and automatically passes Morale tests.',
		},
		'Catalyst' : {
			cast:'6',
			range:'18',
			target:'friendly <b>TYRANIDS</b> unit',
			effect:'Until the start of your next Psychic phase, each time that unit loses a wound, roll a D6; on a 5+, the damage is ignored and the unit does not lose that wound.',
		},
		'The Horror' : {
			cast:'6',
			range:'24 in LoS',
			target:'unit',
			effect:'Until the start of your next Psychic phase, that unit must substract 1 from their hit rolls and Leadership characteristic.',
		},
		'Onslaught' : {
			cast:'6',
			range:'18',
			target:'friendly <b>TYRANIDS</b> unit',
			effect:'That unit can shoot this turn (even if it Advanced) without suffering any penalties to its hit rolls for moving and shooting Heavy weapons, or Advancing and shooting Assault weapons. In addition, that unit can charge this turn even if it Advanced (though not if it Fell Back).',
		},
		'Paroxysm' : {
			cast:'5',
			range:'18',
			target:'enemy unit',
			effect:'Until your next Psychic phase, that unit cannot fight in the Fight phase  until all other units that are able to have done so. If the target unit has an ability that allows it to fight first in the Fight phase, it instead fights as if it didn\'t have this ability. If both players have units that cannot fight until all other units have done so, then alternate choosing which of those units to fight with, starting with the player whose turn is taking place.',
		},
		'Psychic Scream' : {
			cast:'5',
			range:'18',
			target:'nearest enemy unit',
			effect:'Nearest enemy unit within 18\" suffers D3 mortal wounds. In addition, if that unit is a <b>PSYKER</b>, roll two dice. If the result is higher than their Leadership characteristic, randomly select one of their psychic powers. They can no longer use that psychic power.',
		},
	},
}