require 'rho/rhocontroller'
require 'helpers/browser_helper'

class CropController < Rho::RhoController
  include BrowserHelper

  # GET /Crop
  def index
    @crops = Crop.find(:all)
    render :back => '/app'
  end

  # GET /Crop/{1}
  def show
    @crop = Crop.find(@params['id'])
    if @crop
      render :action => :show, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end

  # GET /Crop/new
  def new
    @crop = Crop.new
    render :action => :new, :back => url_for(:action => :index)
  end

  # GET /Crop/{1}/edit
  def edit
    @crop = Crop.find(@params['id'])
    if @crop
      render :action => :edit, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end

  # POST /Crop/create
  def create
    @crop = Crop.create(@params['crop'])
    redirect :action => :index
  end

  # POST /Crop/{1}/update
  def update
    @crop = Crop.find(@params['id'])
    @crop.update_attributes(@params['crop']) if @crop
    redirect :action => :index
  end

  # POST /Crop/{1}/delete
  def delete
    @crop = Crop.find(@params['id'])
    @crop.destroy if @crop
    redirect :action => :index  
  end
end
