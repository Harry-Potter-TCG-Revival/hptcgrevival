import os
import shutil

MODULE_DIR = './modules'
COMPILED_DIR = './compiled'

module_dict = {}


def cleanup():
	trash = os.listdir(COMPILED_DIR)
	for file_name in trash:
		os.remove(COMPILED_DIR + '/' + file_name)


def get_module_lines(module_name):
	module_lines = []
	with open(MODULE_DIR + '/' + module_name + '.html', 'r') as module:
		line = module.readline()
		while line != '':
			module_lines.append(line)
			line = module.readline()
	return module_lines


def compile(file_name):
	print('compiling ' + file_name)
	new_file_lines = []

	with open(file_name, 'r') as file:
		line = file.readline()
		while line != '':
			if '[ADD ' in line:
				module_name = line.split('ADD ')[1].split(']')[0]
				for module_line in get_module_lines(module_name):
					new_file_lines.append(module_line)
			else:
				new_file_lines.append(line)
			line = file.readline()

	with open(COMPILED_DIR + '/' + file_name, 'w') as file:
		file.writelines(new_file_lines)


def main():
	cleanup()

	modules = os.listdir(MODULE_DIR)
	for module_name in modules:
		module_dict[module_name] = MODULE_DIR + '/' + module_name

	files = [f for f in os.listdir() if os.path.isfile(f) and '.git' not in f]
	for file_name in files:
		if file_name.split('.')[-1] == 'html':
			compile(file_name)
		else:
			shutil.copyfile(file_name, COMPILED_DIR + '/' + file_name)


main()