#!/usr/bin/env node
import gamesLogic from '../src/index.js';
import { rule, condition } from '../src/games/game-progression.js';

gamesLogic(rule, condition);
