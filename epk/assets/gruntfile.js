module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		autoprefixer: {
			options: {
				browsers: ['last 1 versions', 'ie 9', 'ie 10']
			},

			single_file: {
				options: {
					map: {
						sourcesContent: true,
						prev: 'css/'
					}
				},
				src: 'css/style.min.css',
				dest: 'css/style.min.css'
			},
		},

		bowercopy: {
			options: {
				clean: true
			},

			js: {
				options: {
					destPrefix: 'js/lib'
				},
				files: {
					'almond.js': 'almond/almond.js',
					'jquery.js': 'jquery/dist/jquery.js',
					'jquery.transit.js': 'jquery.transit/jquery.transit.js',
					'require.js': 'requirejs/require.js',
					'modernizr.js': 'modernizr/modernizr.js'
				},
			},

			fontawesome: {
				options: {
					destPrefix: '.'
				},

				files: {
					'fonts': 'fontawesome/fonts/*.*',
					'scss/lib/fontawesome': 'fontawesome/scss/*.*'
				}
			},

			materialize: {
				options: {
					destPrefix: 'js/includes'
				},
				files: {
					'jquery.min.js': 'jquery/dist/jquery.min.js',
					'jquery.min.map': 'jquery/dist/jquery.min.map'
				}
			}
		},

		// Automatically run a task when a file changes
		watch: {
			styles: {
				files: ['scss/**/*.*'],
				tasks: ['sass:dist', 'autoprefixer'],
				options: {
					spawn: false
				}
			},

			scripts: {
				files: ['js/**/*.*', '!js/lib/*.*', '!js/build/*.*', '!js/includes/*'],
				tasks: ['jshint', 'requirejs:compile'],
				options: {
					spawn: false
				}
			},

			lint: {
				files: ['js/**/*.*', '!js/lib/*.*', '!js/build/*.*', '!js/includes/*'],
				tasks: ['jshint'],
				options: {
					spawn: false
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/style.min.css': 'scss/style.scss'
				}
			}
		},

		jshint: {
			files: ['js/**/*.js', '!js/lib/*.js', '!js/**/*.min.js', '!js/includes/*'],
			options: grunt.file.readJSON('js/.jshintrc')
		},

		jscs: {
			main: {
				src: ['js/**/*.js', '!js/lib/*.*', '!js/build/*.*', '!js/includes/*'],
				options: {
					config: 'js/.jscsrc'
				}
			}
		},

		requirejs: {
			compile: {
				options: grunt.file.readJSON('js/build.json')
			}
		}
	});

	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks("grunt-jscs");
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', 'build and prefix less, lint and build js', [
		'buildsass',
		'jshint',
		'jscs',
		'requirejs'
	]);

	grunt.registerTask('buildsass', 'build and auto-prefix less files', [
		'sass',
		'autoprefixer'
	]);

	grunt.registerTask('watchsass', 'build and watch less', [
		'buildsass',
		'watch:styles'
	]);

	grunt.registerTask('dev', 'build and prefix less, lint and build js, watch', [
		'default',
		'watch'
	]);

	grunt.registerTask('lintjs', 'watch and lint javascript', [
		'jshint',
		'watch:lint'
	]);

	grunt.registerTask('buildjs', 'lint and build javascript', [
		'jshint',
		'requirejs'
	]);
};