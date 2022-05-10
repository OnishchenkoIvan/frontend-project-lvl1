#!/usr/bin/env node
import gamesLogic from '../src/index.js';
import { rule, condition } from '../src/games/game-prime.js';

gamesLogic(rule, condition);
