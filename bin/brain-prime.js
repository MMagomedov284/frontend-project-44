#!/usr/bin/env node
import { playGame } from '../src/index.js'
import { generateRound, gameRules } from '../src/games/prime.js'

playGame(gameRules, generateRound)
